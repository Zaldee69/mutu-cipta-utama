import {Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {ConsultingIcon} from '../icons/ConsultingIcon';
import {TechIcon} from '../icons/TechIcon';
import {EngineeringIcon} from '../icons/EngineeringIcon';
import {Flex} from '../styles/flex';

export const Features1 = () => {
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
          '@sm': { justifyContent: 'space-around', px: '$32', flexDirection: 'row' },
          '@md': { px: '$64' },
        }}
      >
        <Flex direction="column">
          <Text span css={{ color: '$blue600' }}>Layanan Utama</Text>
          <Text h3>Solusi Konsultasi & Teknologi Terpadu</Text>
          <Text span css={{ maxWidth: '480px', color: '$accents8' }}>
            Kami membantu bisnis mengakselerasi pertumbuhan melalui strategi manajemen,
            pengembangan teknologi, dan dukungan rekayasa yang terintegrasi dari hulu ke hilir.
          </Text>

          {/* Konsultasi Manajemen */}
          <Flex css={{ py: '$10', gap: '$5' }}>
            <Flex direction={'column'}>
              <Text h4 weight={'medium'}>Konsultasi Manajemen</Text>
              <Text span css={{ maxWidth: '480px', color: '$accents8' }}>
                Perumusan strategi, peningkatan efisiensi operasional, dan penguatan organisasi
                untuk mendorong profitabilitas.
              </Text>
            </Flex>
          </Flex>

          {/* TI & E-Commerce */}
          <Flex css={{ py: '$10', gap: '$5' }}>
            <Flex direction={'column'}>
              <Text h4 weight={'medium'}>Teknologi Informasi & E-Commerce</Text>
              <Text span css={{ maxWidth: '480px', color: '$accents8' }}>
                Pengembangan aplikasi web/mobile, integrasi sistem, dan platform e-commerce
                yang aman dan scalable.
              </Text>
            </Flex>
          </Flex>

          {/* Keinsinyuran & Arsitektur */}
          <Flex css={{ py: '$10', gap: '$5' }}>
            <Flex direction={'column'}>
              <Text h4 weight={'medium'}>Keinsinyuran & Arsitektur</Text>
              <Text span css={{ maxWidth: '480px', color: '$accents8' }}>
                Desain arsitektur fungsional serta konsultasi teknis dan transportasi
                dengan pendekatan berbasis standar.
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex align={'center'}>
          <FeatureIcon />
        </Flex>
      </Flex>
    </>
  );
};
