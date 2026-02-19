'use client';

import { useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function SimulasiKeuanganPage() {
  const [jumlahKaryawan, setJumlahKaryawan] = useState(4);
  const [gajiPerOrang, setGajiPerOrang] = useState(5500000);
  const [pendapatan, setPendapatan] = useState(0);
  const [pKom, setPKom] = useState(80);
  const [pAset, setPAset] = useState(10);
  const [pSDM, setPSDM] = useState(10);

  const rp = (n: number) => {
    return 'Rp' + n.toLocaleString('id-ID');
  };

  // Calculate target based on employees and salary (6 months buffer)
  const totalGajiBulanan = jumlahKaryawan * gajiPerOrang;
  const target = totalGajiBulanan * 6;

  // Calculate hasil directly without useEffect
  const total = pendapatan;
  const targetVal = target;
  const pK = pKom / 100;
  const pA = pAset / 100;
  const pS = pSDM / 100;
  const progress = Math.min(100, (total / targetVal) * 100);

  const hasil =
    total >= targetVal
      ? {
          status: '🟢 AMAN',
          statusClass: 'text-green-700',
          sisa: total - targetVal,
          progress: progress,
          progressText: rp(total) + ' / ' + rp(targetVal),
          komisaris: (total - targetVal) * pK,
          aset: (total - targetVal) * pA,
          sdm: (total - targetVal) * pS,
          perusahaan: (total - targetVal) * (1 - (pK + pA + pS)),
        }
      : {
          status: '🔴 BELUM AMAN',
          statusClass: 'text-red-700',
          sisa: 0,
          progress: progress,
          progressText: rp(total) + ' / ' + rp(targetVal),
          komisaris: 0,
          aset: 0,
          sdm: 0,
          perusahaan: 0,
        };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Simulasi Keuangan Perusahaan</h1>
          <p className="text-muted-foreground">Masukkan total pendapatan proyek untuk melihat status keuangan dan pembagian dana</p>
        </div>

        {/* PENJELASAN */}
        <Card className="mb-8 bg-blue-50/50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg">📖 Tentang Kalkulator Ini</CardTitle>
            <CardDescription className="mt-2">
              Halaman ini membantu Komisaris dan Manajemen untuk mensimulasikan pembagian dana secara transparan dan objektif. 
              Semua perhitungan dilakukan otomatis dan real-time berdasarkan angka yang dimasukkan.
            </CardDescription>
          </CardHeader>
          <div className="px-6 pb-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="step1">
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-semibold">1️⃣ Bagaimana Cara Menggunakan Simulasi Ini?</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm space-y-2">
                  <p>Silakan ikuti langkah-langkah berikut:</p>
                  <ul className="space-y-1 ml-4 list-disc">
                    <li><strong>Masukkan Data Karyawan:</strong> Jumlah karyawan dan gaji per orang</li>
                    <li><strong>Sistem akan menghitung:</strong> Target minimal = (Jumlah Karyawan × Gaji Bulanan) × 6 bulan</li>
                    <li><strong>Masukkan Pendapatan Proyek:</strong> Total nilai proyek yang diperoleh</li>
                    <li><strong>Sesuaikan Persentase Alokasi:</strong> Komisaris, Aset, dan SDM</li>
                    <li><strong>Lihat Hasil Simulasi:</strong> Status dan pembagian dana akan ditampilkan otomatis</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step2">
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-semibold">2️⃣ Apa Yang Terjadi Jika Pendapatan Belum Mencukupi?</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm space-y-2">
                  <p><strong>🔴 Status BELUM AMAN</strong></p>
                  <p>Artinya pendapatan perusahaan belum mencapai target minimal yang ditetapkan. Fokus perusahaan adalah menjaga stabilitas operasional, dan tidak ada pembagian dana pada tahap ini.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step3">
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-semibold">3️⃣ Apa Yang Terjadi Saat Kondisi AMAN?</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm space-y-2">
                  <p><strong>🟢 Status AMAN</strong></p>
                  <p>Kebutuhan minimal perusahaan telah terpenuhi. Sisa dana bisa dialokasikan ke:</p>
                  <ul className="space-y-1 ml-4 list-disc">
                    <li><strong>💰 Komisaris</strong> - Bagian dana untuk Komisaris</li>
                    <li><strong>🏢 Pengembangan Aset</strong> - Dana untuk pembelian atau peningkatan aset</li>
                    <li><strong>👥 Pengembangan SDM</strong> - Dana untuk pelatihan karyawan</li>
                    <li><strong>🏦 Kas Perusahaan</strong> - Dana cadangan tambahan</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step4">
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-semibold">4️⃣ Bagaimana Cara Membaca Hasilnya?</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm space-y-2">
                  <ul className="space-y-2">
                    <li><strong>Total Gaji Bulanan:</strong> Jumlah biaya gaji seluruh karyawan setiap bulan (Jumlah Karyawan × Gaji Per Orang)</li>
                    <li><strong>Target Minimal (6 Bulan):</strong> Dana minimum yang harus dimiliki = Total Gaji Bulanan × 6 bulan</li>
                    <li><strong>Progres Menuju Target:</strong> Persentase pencapaian target dari pendapatan yang diperoleh</li>
                    <li><strong>Sisa Dana Dialokasikan:</strong> Jumlah dana yang bisa dibagikan jika pendapatan sudah mencapai target (Pendapatan - Target)</li>
                    <li><strong>Pembagian Dana:</strong> Detail rupiah untuk setiap alokasi (Komisaris, Aset, SDM, Kas Perusahaan)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="principles">
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-semibold">✔️ Prinsip Penting yang Dijaga Sistem</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm space-y-1">
                  <p className="flex items-center gap-2">✓ Target minimum selalu menjadi prioritas pertama</p>
                  <p className="flex items-center gap-2">✓ Tidak ada pembagian dana sebelum perusahaan aman</p>
                  <p className="flex items-center gap-2">✓ Semua perhitungan transparan dan terukur</p>
                  <p className="flex items-center gap-2">✓ Angka dapat disesuaikan untuk simulasi kebijakan</p>
                  <p className="text-xs text-muted-foreground mt-3">
                    💡 <em>Kalkulator ini bersifat simulasi dan digunakan sebagai alat bantu pengambilan keputusan internal perusahaan.</em>
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Card>

        {/* INPUT SECTION */}
        <Card className="mb-6 border-2">
          <CardHeader>
            <CardTitle className="text-lg">Input Simulasi</CardTitle>
            <CardDescription>Sesuaikan parameter untuk melihat hasil perhitungan</CardDescription>
          </CardHeader>
          <div className="px-6 pb-6">
            {/* SECTION 1: TARGET CALCULATION */}
            <div className="mb-6 pb-6 border-b">
              <h3 className="font-semibold text-sm text-muted-foreground mb-4">📌 Perhitungan Target Minimal (6 Bulan Gaji)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="jumlahKaryawan" className="font-semibold">👥 Jumlah Karyawan</Label>
                  <Input
                    id="jumlahKaryawan"
                    type="number"
                    value={jumlahKaryawan}
                    onChange={(e) => setJumlahKaryawan(Number(e.target.value))}
                    min="1"
                    className="text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gajiPerOrang" className="font-semibold">💵 Gaji Per Orang / Bulan</Label>
                  <Input
                    id="gajiPerOrang"
                    type="number"
                    value={gajiPerOrang}
                    onChange={(e) => setGajiPerOrang(Number(e.target.value))}
                    min="0"
                    className="text-base"
                  />
                  <p className="text-sm text-blue-600 font-semibold">{rp(gajiPerOrang)}</p>
                </div>
                <div className="space-y-2">
                  <Label className="font-semibold">📊 Total Gaji Bulanan</Label>
                  <div className="px-3 py-2 border rounded-md bg-muted">
                    <p className="text-sm font-semibold">{rp(totalGajiBulanan)}</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <strong>🎯 Target Minimal (6 bulan):</strong> {rp(totalGajiBulanan)} × 6 = <span className="font-bold text-lg">{rp(target)}</span>
                </p>
                <p className="text-xs text-blue-700 mt-2">
                  Dana ini adalah kebutuhan minimum yang harus dimiliki perusahaan untuk menjamin operasional tetap stabil.
                </p>
              </div>
            </div>

            {/* SECTION 2: REVENUE & ALLOCATION */}
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-4">💰 Input Pendapatan & Alokasi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                <div className="md:col-span-2 lg:col-span-1 space-y-2">
                  <Label htmlFor="pendapatan" className="font-semibold">📊 Total Pendapatan Proyek</Label>
                  <Input
                    id="pendapatan"
                    type="number"
                    value={pendapatan}
                    onChange={(e) => setPendapatan(Number(e.target.value))}
                    placeholder="0"
                    className="text-base"
                  />
                  <p className="text-sm text-green-600 font-semibold">{rp(pendapatan)}</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pKom" className="font-semibold">💰 % Komisaris</Label>
                  <Input
                    id="pKom"
                    type="number"
                    value={pKom}
                    onChange={(e) => setPKom(Number(e.target.value))}
                    min="0"
                    max="100"
                    className="text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pAset" className="font-semibold">🏢 % Pengembangan Aset</Label>
                  <Input
                    id="pAset"
                    type="number"
                    value={pAset}
                    onChange={(e) => setPAset(Number(e.target.value))}
                    min="0"
                    max="100"
                    className="text-base"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="pSDM" className="font-semibold">👥 % Pengembangan SDM</Label>
                  <Input
                    id="pSDM"
                    type="number"
                    value={pSDM}
                    onChange={(e) => setPSDM(Number(e.target.value))}
                    min="0"
                    max="100"
                    className="text-base"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* STATUS & PROGRESS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* STATUS UTAMA */}
          <Card className={`lg:col-span-1 border-2 ${hasil.statusClass.includes('green') ? 'border-green-200 bg-green-50/50' : 'border-red-200 bg-red-50/50'}`}>
            <CardHeader>
              <CardDescription className="text-base font-semibold">Status Keuangan</CardDescription>
              <div className={`text-4xl font-bold my-3 ${hasil.statusClass}`}>
                {hasil.status}
              </div>
              <div className="text-sm text-muted-foreground mt-4 pt-4 border-t">
                <div className="text-xs font-medium mb-1">Sisa Dana Dialokasikan:</div>
                <div className="text-2xl font-bold text-foreground">{rp(hasil.sisa)}</div>
              </div>
            </CardHeader>
          </Card>

          {/* PROGRESS */}
          <Card className="lg:col-span-2 border-2">
            <CardHeader>
              <CardDescription className="text-base font-semibold">Progres Menuju Target</CardDescription>
              <div className="mt-6 space-y-3">
                <Progress value={hasil.progress} />
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Target Tercapai</p>
                    <p className="text-2xl font-bold">{hasil.progress.toFixed(0)}%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Pendapatan / Target</p>
                    <p className="text-sm text-foreground font-mono">{rp(total)} / {rp(targetVal)}</p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground bg-gray-50 p-3 rounded mt-4">
                  <p><strong>Target:</strong> {jumlahKaryawan} karyawan × {rp(gajiPerOrang)}/bulan × 6 bulan = {rp(target)}</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* PEMBAGIAN */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-lg">Pembagian Dana</CardTitle>
            <CardDescription>
              {hasil.statusClass.includes('green') 
                ? 'Berikut adalah perhitungan pembagian dana sisa ketika target tercapai:' 
                : 'Pembagian dana akan terlihat ketika target tercapai ✓'}
            </CardDescription>
          </CardHeader>
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 gap-4">
              <div className={`p-4 rounded-lg border-2 ${hasil.komisaris > 0 ? 'bg-blue-50 border-blue-200' : 'bg-muted border-gray-200 opacity-50'}`}>
                <p className="text-sm text-muted-foreground font-medium mb-2">💰 Komisaris</p>
                <p className="text-2xl font-bold">{rp(hasil.komisaris)}</p>
                <p className="text-xs text-muted-foreground mt-2">{pKom}% dari sisa</p>
              </div>
              <div className={`p-4 rounded-lg border-2 ${hasil.aset > 0 ? 'bg-amber-50 border-amber-200' : 'bg-muted border-gray-200 opacity-50'}`}>
                <p className="text-sm text-muted-foreground font-medium mb-2">🏢 Pengembangan Aset</p>
                <p className="text-2xl font-bold">{rp(hasil.aset)}</p>
                <p className="text-xs text-muted-foreground mt-2">{pAset}% dari sisa</p>
              </div>
              <div className={`p-4 rounded-lg border-2 ${hasil.sdm > 0 ? 'bg-purple-50 border-purple-200' : 'bg-muted border-gray-200 opacity-50'}`}>
                <p className="text-sm text-muted-foreground font-medium mb-2">👥 Pengembangan SDM</p>
                <p className="text-2xl font-bold">{rp(hasil.sdm)}</p>
                <p className="text-xs text-muted-foreground mt-2">{pSDM}% dari sisa</p>
              </div>
              <div className={`p-4 rounded-lg border-2 ${hasil.perusahaan > 0 ? 'bg-green-50 border-green-200' : 'bg-muted border-gray-200 opacity-50'}`}>
                <p className="text-sm text-muted-foreground font-medium mb-2">🏦 Kas Perusahaan</p>
                <p className="text-2xl font-bold">{rp(hasil.perusahaan)}</p>
                <p className="text-xs text-muted-foreground mt-2">{(100 - pKom - pAset - pSDM).toFixed(0)}% dari sisa</p>
              </div>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}
