import { Text } from '@nextui-org/react';
import React from 'react';
import { BoxIcon } from '../icons/BoxIcon';
import { Flex } from '../styles/flex';

export const Faq = () => {
  return (
    <>
      <Flex
        css={{ py: '$20', gap: '$18', px: '$6' }}
        direction={'column'}
      >
        <Flex align={'center'} direction={'column'}>
          <Text span css={{ color: '$blue600' }}>FAQ</Text>
          <Text h2>Pertanyaan yang Sering Diajukan</Text>
          <Text
            span
            css={{ maxWidth: '700px', color: '$accents8', textAlign: 'center' }}
          >
            Ringkasan jawaban atas pertanyaan umum seputar layanan konsultasi, teknologi, dan rekayasa
            di PT Mutu Cipta Utama.
          </Text>
        </Flex>

        <Flex
          css={{
            gap: '$10',
            '@lg': { px: '$64' },
          }}
          direction={'column'}
        >
          {/* Q1 */}
          <Flex css={{ gap: '$5' }} justify={'center'}>
            <BoxIcon />
            <Flex direction={'column'} css={{ gap: '$3' }}>
              <Text h4>Apa saja layanan yang disediakan?</Text>
              <Text span css={{ color: '$accents8' }}>
                Kami menangani 7 kategori layanan: Konsultasi Manajemen, Teknologi Informasi,
                Pengembangan E-Commerce, Pemrograman Komputer, Arsitektur, Keinsinyuran, dan
                Konsultasi Transportasi.
              </Text>
            </Flex>
          </Flex>

          {/* Q2 */}
          <Flex css={{ gap: '$5' }} justify={'center'}>
            <BoxIcon />
            <Flex direction={'column'} css={{ gap: '$3' }}>
              <Text h4>Apakah memiliki pengalaman proyek berskala besar?</Text>
              <Text span css={{ color: '$accents8' }}>
                Ya. Tim kami berpengalaman mengelola berbagai skala—dari inisiatif perbaikan proses
                hingga implementasi sistem dan proyek desain teknis. Pendekatan kami terstruktur,
                terukur, dan berorientasi hasil.
              </Text>
            </Flex>
          </Flex>

          {/* Q3 */}
          <Flex css={{ gap: '$5' }} justify={'center'}>
            <BoxIcon />
            <Flex direction={'column'} css={{ gap: '$3' }}>
              <Text h4>Bagaimana cara memulai konsultasi?</Text>
              <Text span css={{ color: '$accents8' }}>
                Hubungi kami melalui email <b>support@mutuciptautama.id</b> atau WhatsApp
                <b> 081387230801</b>. Kami menyediakan <b>konsultasi awal gratis</b> untuk memahami
                kebutuhan Anda sebelum menyusun rencana kerja.
              </Text>
            </Flex>
          </Flex>

          {/* Q4 */}
          <Flex css={{ gap: '$5' }} justify={'center'}>
            <BoxIcon />
            <Flex direction={'column'} css={{ gap: '$3' }}>
              <Text h4>Berapa lama durasi pengerjaan proyek?</Text>
              <Text span css={{ color: '$accents8' }}>
                Durasi bergantung cakupan & kompleksitas. Sebagai gambaran: konsultasi manajemen
                dasar ± <b>2–4 minggu</b>, pengembangan e-commerce <b>6–12 minggu</b>. Proyek
                keinsinyuran mengikuti skala dan tahapan konstruksi.
              </Text>
            </Flex>
          </Flex>

          {/* Q5 – baru */}
          <Flex css={{ gap: '$5' }} justify={'center'}>
            <BoxIcon />
            <Flex direction={'column'} css={{ gap: '$3' }}>
              <Text h4>Bagaimana model biaya layanan?</Text>
              <Text span css={{ color: '$accents8' }}>
                Fleksibel—<i>fixed fee</i> per proyek, <i>retainer</i> bulanan, atau <i>time & materials</i>.
                Kami akan merekomendasikan skema paling efisien setelah sesi konsultasi awal.
              </Text>
            </Flex>
          </Flex>

          {/* Q6 – baru */}
          <Flex css={{ gap: '$5' }} justify={'center'}>
            <BoxIcon />
            <Flex direction={'column'} css={{ gap: '$3' }}>
              <Text h4>Apakah bisa menandatangani NDA?</Text>
              <Text span css={{ color: '$accents8' }}>
                Bisa. Kami siap bekerja dengan NDA/PKS untuk menjaga kerahasiaan data dan dokumen
                selama proses kerja sama.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

    </>
  );
};
