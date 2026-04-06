import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const registrationSchema = z.object({
    namaLengkap: z.string().min(3, "Nama lengkap minimal 3 karakter"),
    institusi: z.string().min(2, "Institusi/Perusahaan wajib diisi"),
    jabatan: z.string().min(2, "Jabatan wajib diisi"),
    email: z.string().email("Format email tidak valid"),
    noHp: z
        .string()
        .min(1, "Nomor WhatsApp wajib diisi")
        .regex(
            /^(\+62|62|0)8[0-9]{8,11}$/,
            "Nomor WhatsApp tidak valid. Gunakan format: 08xxxxxxxxxx (10–13 digit)"
        ),
    jenisKelamin: z.enum(["Laki-laki", "Perempuan"]),
    asalKota: z.string().min(2, "Asal kota wajib diisi"),
    pengalaman: z.enum(["Belum pernah", "Sudah pernah tapi sering error", "Sudah terbiasa"]),
    motivasi: z.string().min(10, "Motivasi minimal 10 karakter").max(500, "Motivasi maksimal 500 karakter"),
    sumberInfo: z.enum([
        "Grup WhatsApp",
        "Instagram",
        "LinkedIn",
        "Rekan/Kolega",
        "Website",
        "Lainnya",
    ]),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const parsed = registrationSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Data tidak valid",
                    errors: parsed.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        const data = parsed.data;
        const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

        if (!webhookUrl) {
            console.warn("⚠️ GOOGLE_SHEETS_WEBHOOK_URL tidak diset — mode dev");
            console.log("📋 [DEV] Seminar Registration Data:", data);
            return NextResponse.json({
                success: true,
                message: "Registrasi berhasil (dev mode — Google Sheets tidak terhubung)",
            });
        }

        // Kirim via GET + query params — lebih reliable dari server (tidak kena redirect GAS)
        const params = new URLSearchParams({
            timestamp: new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }),
            namaLengkap: data.namaLengkap,
            institusi: data.institusi,
            jabatan: data.jabatan,
            email: data.email,
            noHp: data.noHp,
            jenisKelamin: data.jenisKelamin,
            asalKota: data.asalKota,
            pengalaman: data.pengalaman,
            motivasi: data.motivasi,
            sumberInfo: data.sumberInfo,
            status: "Belum Bayar",
        });

        const getUrl = `${webhookUrl}?${params.toString()}`;
        console.log("📤 Mengirim ke GAS via GET...");

        const sheetResponse = await fetch(getUrl, {
            method: "GET",
            redirect: "follow",
        });

        const responseText = await sheetResponse.text();
        console.log("📊 GAS response:", sheetResponse.status, responseText.slice(0, 200));

        // Anggap sukses jika status 200 dan berisi JSON success, atau status 200 tanpa HTML error
        const isHtmlError = responseText.includes("<!DOCTYPE") || responseText.includes("<html");
        const isJsonSuccess = responseText.includes('"success":true');

        if (sheetResponse.ok && (isJsonSuccess || !isHtmlError)) {
            return NextResponse.json({
                success: true,
                message: "Registrasi berhasil! Silakan lakukan pembayaran.",
            });
        }

        throw new Error(`GAS gagal merespons: ${sheetResponse.status}`);

    } catch (error) {
        console.error("Seminar registration error:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Terjadi kesalahan server. Silakan coba lagi.",
            },
            { status: 500 }
        );
    }
}
