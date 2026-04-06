"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, CopyCheck, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Field,
    FieldLabel,
    FieldDescription,
    FieldError,
    FieldGroup,
} from "@/components/ui/field";

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
    jenisKelamin: z.enum(["Laki-laki", "Perempuan"], {
        message: "Pilih jenis kelamin",
    }),
    asalKota: z.string().min(2, "Asal kota wajib diisi"),
    pengalaman: z.enum(["Belum pernah", "Sudah pernah tapi sering error", "Sudah terbiasa"], {
        message: "Pilih pengalaman menggunakan AMDALNET",
    }),
    motivasi: z
        .string()
        .min(10, "Motivasi minimal 10 karakter")
        .max(500, "Motivasi maksimal 500 karakter"),
    sumberInfo: z.enum(
        ["Grup WhatsApp", "Instagram", "LinkedIn", "Rekan/Kolega", "Website", "Lainnya"],
        { message: "Pilih sumber informasi" }
    ),
});

type FormData = z.infer<typeof registrationSchema>;

const BANK_INFO = {
    bank: "BCA",
    rekening: "1234567890",
    atasNama: "PT Mutu Cipta Utama",
    nominal: "Rp 200.000",
    konfirmasi: "https://wa.link/l6mph1",
};

function SuccessCard({ name }: { name: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(BANK_INFO.rekening);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Success Header */}
            <div className="text-center space-y-3">
                <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-zinc-900">
                        Pendaftaran Berhasil! 🎉
                    </h3>
                    <p className="text-zinc-600 mt-1">
                        Halo <strong>{name}</strong>, data pendaftaran Anda telah diterima.
                    </p>
                </div>
            </div>

            {/* Payment Instructions */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 space-y-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <span className="text-amber-600 font-bold text-sm">!</span>
                    </div>
                    <h4 className="font-semibold text-amber-800">Langkah Selanjutnya: Lakukan Pembayaran</h4>
                </div>

                <div className="bg-white rounded-lg border border-amber-100 p-4 space-y-3">
                    <p className="text-sm font-medium text-zinc-500 uppercase tracking-wide">
                        Detail Pembayaran
                    </p>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center">
                            <span className="text-zinc-600">Bank</span>
                            <span className="font-semibold text-zinc-900">{BANK_INFO.bank}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-zinc-600">Atas Nama</span>
                            <span className="font-semibold text-zinc-900">{BANK_INFO.atasNama}</span>
                        </div>
                        <div className="border-t border-dashed border-zinc-200 pt-2 flex justify-between items-center">
                            <span className="text-zinc-600">No. Rekening</span>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-lg text-zinc-900 tracking-widest">
                                    {BANK_INFO.rekening}
                                </span>
                                <button
                                    onClick={handleCopy}
                                    title="Salin nomor rekening"
                                    className="text-primary hover:text-primary/80 transition-colors"
                                >
                                    {copied ? (
                                        <CopyCheck className="w-4 h-4 text-green-600" />
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth="2" />
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth="2" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center border-t border-dashed border-zinc-200 pt-2">
                            <span className="text-zinc-600">Nominal</span>
                            <span className="font-bold text-primary text-lg">{BANK_INFO.nominal}</span>
                        </div>
                    </div>
                </div>

                <div className="text-sm text-amber-700 space-y-1">
                    <p className="font-medium">⚠️ Harap perhatikan:</p>
                    <ul className="list-disc pl-4 space-y-0.5 text-amber-600">
                        <li>Transfer sesuai nominal tepat <strong>Rp 200.000</strong></li>
                        <li>Simpan bukti transfer Anda</li>
                        <li>Konfirmasi pembayaran via WhatsApp</li>
                    </ul>
                </div>
            </div>

            {/* Confirm Payment Button */}
            <a
                href={BANK_INFO.konfirmasi}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors"
            >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konfirmasi Pembayaran via WhatsApp
            </a>

            <p className="text-center text-xs text-zinc-400">
                Link Zoom akan dikirimkan ke WhatsApp Anda setelah pembayaran dikonfirmasi.
            </p>
        </div>
    );
}

export default function SeminarRegistrationForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedName, setSubmittedName] = useState("");
    const [serverError, setServerError] = useState("");

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        watch,
    } = useForm<FormData>({
        resolver: zodResolver(registrationSchema),
    });

    const motivasiValue = watch("motivasi") ?? "";

    const onSubmit = async (data: FormData) => {
        setServerError("");
        try {
            const res = await fetch("/api/seminar-amdalnet", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            if (!res.ok || !result.success) {
                throw new Error(result.message ?? "Gagal mendaftar. Silakan coba lagi.");
            }
            setSubmittedName(data.namaLengkap);
            setIsSubmitted(true);
        } catch (err) {
            setServerError(
                err instanceof Error ? err.message : "Terjadi kesalahan. Silakan coba lagi."
            );
        }
    };

    if (isSubmitted) {
        return <SuccessCard name={submittedName} />;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
                {/* Server Error */}
                {serverError && (
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <p>{serverError}</p>
                    </div>
                )}

                {/* Row 1: Nama & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field>
                        <FieldLabel htmlFor="namaLengkap">
                            Nama Lengkap <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                            id="namaLengkap"
                            placeholder="Johanes Doe"
                            aria-invalid={!!errors.namaLengkap}
                            {...register("namaLengkap")}
                        />
                        <FieldError errors={errors.namaLengkap ? [errors.namaLengkap] : []} />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="email">
                            Email <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                            id="email"
                            type="email"
                            placeholder="anda@email.com"
                            aria-invalid={!!errors.email}
                            {...register("email")}
                        />
                        <FieldError errors={errors.email ? [errors.email] : []} />
                    </Field>
                </div>

                {/* Row 2: Institusi & Jabatan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field>
                        <FieldLabel htmlFor="institusi">
                            Institusi / Perusahaan <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                            id="institusi"
                            placeholder="PT Contoh Perusahaan"
                            aria-invalid={!!errors.institusi}
                            {...register("institusi")}
                        />
                        <FieldError errors={errors.institusi ? [errors.institusi] : []} />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="jabatan">
                            Jabatan <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                            id="jabatan"
                            placeholder="Manajer HSE / Mahasiswa"
                            aria-invalid={!!errors.jabatan}
                            {...register("jabatan")}
                        />
                        <FieldError errors={errors.jabatan ? [errors.jabatan] : []} />
                    </Field>
                </div>

                {/* Row 3: No WA & Asal Kota */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field>
                        <FieldLabel htmlFor="noHp">
                            No. WhatsApp Aktif <span className="text-red-500">*</span>
                        </FieldLabel>
                        <div className="relative">
                            <Input
                                id="noHp"
                                type="tel"
                                placeholder="08xxxxxxxxxx"
                                maxLength={15}
                                aria-invalid={!!errors.noHp}
                                className="pr-12"
                                {...register("noHp")}
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-green-600 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
                                WA
                            </span>
                        </div>
                        <FieldError errors={errors.noHp ? [errors.noHp] : []} />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="asalKota">
                            Asal Kota <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                            id="asalKota"
                            placeholder="Jakarta"
                            aria-invalid={!!errors.asalKota}
                            {...register("asalKota")}
                        />
                        <FieldError errors={errors.asalKota ? [errors.asalKota] : []} />
                    </Field>
                </div>
                <p className="text-xs text-muted-foreground -mt-3">
                    Link Zoom akan dikirim ke No. WhatsApp Anda setelah pembayaran dikonfirmasi
                </p>

                {/* Row 4: Jenis Kelamin & Pengalaman */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field>
                        <FieldLabel htmlFor="jenisKelamin">
                            Jenis Kelamin <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Controller
                            name="jenisKelamin"
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger id="jenisKelamin" className="w-full" aria-invalid={!!errors.jenisKelamin}>
                                        <SelectValue placeholder="Pilih jenis kelamin" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Laki-laki">Laki-laki</SelectItem>
                                            <SelectItem value="Perempuan">Perempuan</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        <FieldError errors={errors.jenisKelamin ? [errors.jenisKelamin] : []} />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="pengalaman">
                            Pengalaman di AMDALNET <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Controller
                            name="pengalaman"
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger id="pengalaman" className="w-full" aria-invalid={!!errors.pengalaman}>
                                        <SelectValue placeholder="Pilih pengalaman Anda" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Belum pernah">Belum pernah menggunakan AMDALNET</SelectItem>
                                            <SelectItem value="Sudah pernah tapi sering error">Sudah pernah, tapi sering mengalami error</SelectItem>
                                            <SelectItem value="Sudah terbiasa">Sudah terbiasa, ingin update pengetahuan</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        <FieldError errors={errors.pengalaman ? [errors.pengalaman] : []} />
                    </Field>
                </div>

                {/* Motivasi */}
                <Field>
                    <FieldLabel htmlFor="motivasi">
                        Motivasi Mengikuti Seminar <span className="text-red-500">*</span>
                    </FieldLabel>
                    <div className="relative">
                        <Textarea
                            id="motivasi"
                            rows={3}
                            placeholder="Ceritakan mengapa Anda ingin mengikuti seminar AMDALNET ini..."
                            className="resize-none"
                            aria-invalid={!!errors.motivasi}
                            {...register("motivasi")}
                        />
                        <span className="absolute bottom-2 right-3 text-xs text-muted-foreground">
                            {motivasiValue.length}/500
                        </span>
                    </div>
                    <FieldError errors={errors.motivasi ? [errors.motivasi] : []} />
                </Field>

                {/* Sumber Info */}
                <Field>
                    <FieldLabel htmlFor="sumberInfo">
                        Dari mana Anda mengetahui seminar ini? <span className="text-red-500">*</span>
                    </FieldLabel>
                    <Controller
                        name="sumberInfo"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger id="sumberInfo" className="w-full" aria-invalid={!!errors.sumberInfo}>
                                    <SelectValue placeholder="Pilih sumber informasi" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Grup WhatsApp">Grup WhatsApp</SelectItem>
                                        <SelectItem value="Instagram">Instagram</SelectItem>
                                        <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                                        <SelectItem value="Rekan/Kolega">Rekan / Kolega</SelectItem>
                                        <SelectItem value="Website">Website PT Mutu Cipta Utama</SelectItem>
                                        <SelectItem value="Lainnya">Lainnya</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    <FieldError errors={errors.sumberInfo ? [errors.sumberInfo] : []} />
                </Field>

                {/* HTM Notice */}
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/15">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-xs font-bold">Rp</span>
                    </div>
                    <div className="text-sm">
                        <p className="font-semibold text-zinc-800">HTM: Rp 200.000 / peserta</p>
                        <p className="text-muted-foreground mt-0.5">
                            Pembayaran dilakukan secara manual via transfer bank setelah pendaftaran.
                            Instruksi transfer akan ditampilkan setelah form ini dikirim.
                        </p>
                    </div>
                </div>

                {/* Submit */}
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 h-auto text-base font-semibold"
                    id="submit-registrasi"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Mendaftarkan...
                        </>
                    ) : (
                        "Daftar Sekarang →"
                    )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                    Dengan mendaftar, Anda menyetujui data akan digunakan untuk keperluan administrasi seminar.
                </p>
            </FieldGroup>
        </form>
    );
}
