import {Button, Divider, Input, Text} from '@nextui-org/react';
import React, { useState } from 'react';
import Image from 'next/image';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import Link from 'next/link';

export const Hero = () => {
   const [email, setEmail] = useState('');
   const [isLoading, setIsLoading] = useState(false);

   const handleEmailSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email) return;
      
      setIsLoading(true);
      // TODO: Add actual email submission logic
      console.log('Email submitted:', email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(false);
      setEmail('');
   };

   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     Solusi Konsultasi & Teknologi{' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                     color="primary"
                  >
                     Terintegrasi
                  </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '500px',
                  }}
                  size={'$lg'}
                  span
               >
                  PT Mutu Cipta Utama - Mitra terpercaya dalam konsultasi manajemen, solusi teknologi informasi, pengembangan e-commerce, dan jasa keinsinyuran yang profesional.
               </Text>

               <Link href="https://api.whatsapp.com/send?phone=6282253654721&text=Halo%2C%20saya%20ingin%20melakukan%20konsultasi" target='_blank'>
                  <Button>Hubungi Kami</Button>
               </Link>

            </Box>
            <Box
               css={{
                  '& img': {
                     width: '645px',
                     objectFit: 'contain',
                  },
               }}
            >
               <img src="/illust.svg" alt="PT Mutu Cipta Utama layanan konsultasi dan keinsinyuran" />
            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
