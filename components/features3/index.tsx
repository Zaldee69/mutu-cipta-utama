import {Card, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features3 = () => {
  return (
    <>
      <Box css={{ px: '$6', pb: '$14' }}>
        <Flex direction={'column'} justify={'center'} align={'center'} css={{ pt: '$20' }}>
          <Text span css={{ color: '$blue600' }}>Legalitas & Fakta Perusahaan</Text>
          <Text h3>Terpercaya, Resmi, dan Siap Berkolaborasi</Text>
          <Text
            span
            css={{ maxWidth: '800px', color: '$accents8', textAlign: 'center' }}
          >
            Legalitas usaha yang jelas dan informasi ringkas perusahaan untuk
            mendukung proses kolaborasi Anda.
          </Text>
        </Flex>

        <Flex align={'center'} justify={'center'} wrap={'wrap'} css={{ gap: '1rem', pt: '$14' }}>
          <Card css={{ mw: '500px' }}>
            <Card.Body>
              <Flex css={{ gap: '0.5rem' }}>
                <Flex direction={'column'}>
                  <Text h5>Terdaftar Resmi</Text>
                  <Text span>
                    Legalitas usaha resmi yang diakui pemerintah, menjamin kredibilitas dan kepatuhan perusahaan.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card css={{ mw: '500px' }}>
            <Card.Body>
              <Flex css={{ gap: '0.5rem' }}>
                <Flex direction={'column'}>
                  <Text h5>Sertifikat Standar (OSS)</Text>
                  <Text span>
                    Pemenuhan sertifikat standar untuk arsitektur, keinsinyuran, dan konsultasi
                    transportasi dilakukan sesuai ketentuan OSS.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>

        <Flex align={'center'} wrap={'wrap'} justify={'center'} css={{ gap: '1rem', pt: '$8' }}>
          <Card css={{ mw: '500px' }}>
            <Card.Body>
              <Flex css={{ gap: '0.5rem' }}>
                <Flex direction={'column'}>
                  <Text h5>7 Lini Layanan</Text>
                  <Text span>
                    Konsultasi Manajemen, Teknologi Informasi, Pengembangan E-Commerce,
                    Pemrograman Komputer, Arsitektur, Keinsinyuran, dan Konsultasi Transportasi.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card css={{ mw: '500px' }}>
            <Card.Body>
              <Flex css={{ gap: '0.5rem' }}>
                <Flex direction={'column'}>
                  <Text h5>Kantor Pusat Strategis</Text>
                  <Text span>
                    Gedung Palma One Lt. 7 Suite 709, Kuningan Timur, Jakarta Selatan — akses mudah untuk pertemuan bisnis.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
      </Box>

    </>
  );
};
