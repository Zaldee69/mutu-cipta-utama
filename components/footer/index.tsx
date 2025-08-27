import {Divider, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <Flex css={{ py: '$20', px: '$6' }}>
      <Box as={'footer'} css={{ width: '100%' }}>
        <Flex
          justify={'center'}
          wrap={'wrap'}
          align={'flex-start'}
          css={{ gap: '$10', '& ul': { margin: 0, padding: 0 } }}
        >
          {/* Brand & Services */}
          <Flex direction={'column'} css={{ gap: '$5', w: '250px' }} align={'center'}>
            <Image
               src="/logo.png"
               alt="PT Mutu Cipta Utama"
               width={120}
               height={80}
            />
            <Box as={'ul'} css={{ gap: '$5', listStyle: 'none', textAlign: 'center' }}>
              <Box as={'li'}>
                <Text span css={{ color: '$accents8' }}>Konsultasi Manajemen</Text>
              </Box>
              <Box as={'li'}>
                <Text span css={{ color: '$accents8' }}>Teknologi Informasi</Text>
              </Box>
              <Box as={'li'}>
                <Text span css={{ color: '$accents8' }}>E-Commerce Development</Text>
              </Box>
              <Box as={'li'}>
                <Text span css={{ color: '$accents8' }}>Arsitektur & Keinsinyuran</Text>
              </Box>
            </Box>
          </Flex>

          {/* Company Info */}
          <Flex direction={'column'} css={{ gap: '$5', w: '250px' }} align={'center'}>
            <Text h5>Tentang Perusahaan</Text>
            <Box as={'ul'} css={{ gap: '$5', listStyle: 'none', textAlign: 'center' }}>
              <Box as={'li'}>
                <Text span css={{ color: '$accents8' }}>Legalitas Usaha Resmi</Text>
              </Box>
              <Box as={'li'}>
                <Text span css={{ color: '$accents8' }}>Jakarta Selatan</Text>
              </Box>
              <Box as={'li'}>
                <Text span css={{ color: '$accents8' }}>Palma One Suite 709</Text>
              </Box>
              <Box as={'li'}>
                <Text span css={{ color: '$accents8' }}>Sejak 2025</Text>
              </Box>
            </Box>
          </Flex>

          {/* Contact */}
          <Flex direction={'column'} css={{ gap: '$5', w: '250px' }} align={'center'}>
            <Text h5>Kontak</Text>
            <Box as={'ul'} css={{ gap: '$5', listStyle: 'none', textAlign: 'center' }}>
              <Box as={'li'}>
                <Link target='_blank' href="https://api.whatsapp.com/send?phone=6282253654721&text=Halo%2C%20saya%20ingin%20melakukan%20konsultasi" >
                  <Text span css={{ color: '$accents8' }}>Chat via WhatsApp</Text>
                </Link>
              </Box>
              <Box as={'li'}>
                <Text span css={{ color: '$accents8' }}>support@mutuciptautama.id</Text>
              </Box>
              <Box as={'li'}>
                <Text span css={{ color: '$accents8' }}>Jakarta Selatan</Text>
              </Box>
              <Box as={'li'}>
                <Text span css={{ color: '$accents8' }}>Sen–Jum 09:00–17:00</Text>
              </Box>
            </Box>
          </Flex>

          {/* Office Address */}
          <Flex direction={'column'} css={{ gap: '$5', w: '250px' }} align={'center'}>
            <Text h5>Alamat Kantor</Text>
            <Box as={'ul'} css={{ gap: '$5', listStyle: 'none', textAlign: 'center' }}>
              <Box as={'li'}>
                <Text span css={{ color: '$accents8' }}>Gedung Palma One Lt. 7 Suite 709</Text>
              </Box>
              <Box as={'li'}>
                <Text span css={{ color: '$accents8' }}>Jl. H.R. Rasuna Said Kav. X-2 No. 4</Text>
              </Box>
              <Box as={'li'}>
                <Text span css={{ color: '$accents8' }}>Kuningan Timur, Setiabudi</Text>
              </Box>
              <Box as={'li'}>
                <Text span css={{ color: '$accents8' }}>Jakarta Selatan 12950</Text>
              </Box>
            </Box>
          </Flex>
        </Flex>

        {/* Bottom Bar */}
        <Box css={{ px: '$10', '@md': { px: '$56' } }}>
          <Divider css={{ mt: '$14' }} />
          <Flex
            align={'center'}
            justify={'center'}
            wrap={'wrap'}
            css={{
              pt: '$8',
              gap: '$10',
            }}
          >
            <Flex css={{ gap: '$6' }}>
              <Text span css={{ color: '$accents8' }}>
                © 2025 PT Mutu Cipta Utama. All rights reserved.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
