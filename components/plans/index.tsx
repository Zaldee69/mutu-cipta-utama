import { Button, Card, Divider, Grid, Link, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Plans = () => {
  return (
    <>
      <Flex
        css={{ py: '$20', gap: '1rem', px: '$6' }}
        justify={'center'}
        wrap={'wrap'}
        direction={'column'}
        align={'center'}
      >
        <Flex direction={'column'} align={'center'}>
          <Text span css={{ color: '$blue600' }}>
            Paket Layanan
          </Text>
          <Text h2>Pilihan Konsultasi Terbaik</Text>
        </Flex>

        <Flex
          css={{ gap: '2rem', width: '100%' }}
          wrap={'wrap'}
          justify={'center'}
        >
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Konsultasi Dasar
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    Konsultasi manajemen dan analisis bisnis dasar untuk 
                    perusahaan kecil dan menengah
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Text css={{ display: 'contents' }} h2>
                Rp 5jt{' '}
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>/bulan</Text>
              <Button css={{ mt: '$7', mb: '$12' }}>Mulai Konsultasi</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    1 Team Members
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Analisis Bisnis Dasar
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Konsultasi Manajemen
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Laporan & Rekomendasi
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Support Email & WhatsApp
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Paket Profesional
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    Solusi lengkap untuk konsultasi teknologi informasi, 
                    pengembangan sistem, dan aplikasi e-commerce
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Text css={{ display: 'contents' }} h2>
                Rp 15jt{' '}
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>/bulan</Text>
              <Button css={{ mt: '$7', mb: '$12' }}>Pilih Paket</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Sistem Informasi Custom
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Platform E-Commerce
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Aplikasi Web & Mobile
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Konsultasi Teknologi
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Support Prioritas
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Paket Enterprise
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    Solusi lengkap untuk perusahaan besar dengan kebutuhan 
                    konsultasi keinsinyuran, arsitektur, dan manajemen kompleks
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Text css={{ display: 'contents' }} h2>
                Custom{' '}
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>/proyek</Text>
              <Button css={{ mt: '$7', mb: '$12' }}>Hubungi Kami</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Konsultasi Keinsinyuran
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Jasa Arsitektur
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Konsultasi Transportasi
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Sertifikat Standar
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Dukungan 24/7
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Entreprise
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    Cocok untuk bisnis yang baru berkembang dan membutuhkan 
                    konsultasi dasar serta dukungan awal dalam pengelolaan.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Text css={{ display: 'contents' }} h2>
                $199{' '}
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>/mo</Text>
              <Button css={{ mt: '$7', mb: '$12' }}>Get Started</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    100 Team Members
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    100 Website
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    100 GB Storage
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    100 TB Transfer
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Email Support
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
        </Flex>
      </Flex>

      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
      />
    </>
  );
};
