import {Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';

export const Features2 = () => {
  return (
    <>
      <Flex
        direction={'column'}
        css={{
          gap: '1rem',
          pt: '$20',
          justifyContent: 'center',
          alignItems: 'center',
          px: '$6',
          '@sm': { gap: '5rem', flexDirection: 'row-reverse', px: '$16' },
          '@md': { justifyContent: 'space-evenly' },
        }}
      >
        <Flex direction="column" align={'center'}>
          <Text span css={{ color: '$blue600' }}>Keunggulan Kami</Text>
          <Text h3>Mengapa Memilih PT Mutu Cipta Utama?</Text>
          <Text
            span
            css={{ maxWidth: '520px', color: '$accents8', textAlign: 'center' }}
          >
            Pendekatan multidisiplin yang terukur, tim berpengalaman, dan fokus pada hasil
            membuat kami menjadi mitra yang tepat untuk tantangan bisnis Anda.
          </Text>

          <Flex justify={'center'} wrap={'wrap'} css={{ py: '$10', gap: '$12' }}>
            {/* USP 1 */}
            <Flex css={{ py: '$10', gap: '$5', maxWidth: '325px' }}>
              <Flex direction={'column'}>
                <Text h4 weight={'medium'}>Solusi Multidisiplin</Text>
                <Text span css={{ color: '$accents8' }}>
                  Satu pintu untuk manajemen, teknologi, arsitektur, dan transportasi.
                </Text>
              </Flex>
            </Flex>

            {/* USP 2 */}
            <Flex css={{ py: '$10', gap: '$5', maxWidth: '325px' }}>
              <Flex direction={'column'}>
                <Text h4 weight={'medium'}>Pendekatan Terukur</Text>
                <Text span css={{ color: '$accents8' }}>
                  Berbasis data, analisis mendalam, dan standar industri.
                </Text>
              </Flex>
            </Flex>

            {/* USP 3 */}
            <Flex css={{ py: '$10', gap: '$5', maxWidth: '325px' }}>
              <Flex direction={'column'}>
                <Text h4 weight={'medium'}>Tim Berpengalaman</Text>
                <Text span css={{ color: '$accents8' }}>
                  Praktisi beragam disiplin dengan rekam hasil yang kuat.
                </Text>
              </Flex>
            </Flex>

            {/* USP 4 */}
            <Flex css={{ py: '$10', gap: '$5', maxWidth: '325px' }}>
              <Flex direction={'column'}>
                <Text h4 weight={'medium'}>Respons & Kolaborasi Cepat</Text>
                <Text span css={{ color: '$accents8' }}>
                  Komunikasi jelas, progres terukur, dan dukungan pasca-implementasi.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

    </>
  );
};
