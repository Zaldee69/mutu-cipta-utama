import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';
import Link from 'next/link';

export const Trial = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               px: '$6',
            }}
            justify={'center'}
            direction={'column'}
            align={'center'}
         >
            <Text h3>Mulai Konsultasi Gratis</Text>
            <Text
               span
               css={{
                  color: '$accents8',
                  pb: '$15',
                  textAlign: 'center',
               }}
            >
               Dapatkan konsultasi gratis untuk kebutuhan bisnis Anda. 
               Tim ahli kami siap membantu mengembangkan perusahaan Anda.
            </Text>

            <Link target='_blank' href="https://api.whatsapp.com/send?phone=6282253654721&text=Halo%2C%20saya%20ingin%20melakukan%20konsultasi">
               <Button>Hubungi Kami Sekarang</Button>
            </Link>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
