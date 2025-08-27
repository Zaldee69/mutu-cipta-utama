import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {AcmeLogo} from './logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';
import Image from 'next/image';

export const Nav = () => {
   const collapseItems = [
      'Layanan',
      'Tentang',
      'Kontak',
      'Karir',
   ];
   return (
      <Navbar>
         {/* Toggle button untuk mobile */}
         <Navbar.Toggle 
            aria-label="toggle navigation" 
            showIn="xs"
         />
         
         {/* Brand dan menu - layout normal untuk desktop */}
         <Navbar.Brand>
            {/* Logo untuk desktop - posisi normal */}
            <div className="desktop-logo"  >
               <Image
                  src="/logo.png"
                  alt="PT Mutu Cipta Utama"
                  width={100}
                  height={65}
                  style={{
                     objectFit: 'contain',
                     margin: '0.75rem 1rem'
                  }}
               />
            </div>
            <Navbar.Content
               hideIn="xs"
               css={{
                  pl: '1.5rem',
               }} 
            >
               <Navbar.Link isActive href="#">
                  Beranda
               </Navbar.Link>
               <Navbar.Link href="#">
                  Tentang
               </Navbar.Link>
               <Navbar.Link href="#">Kontak</Navbar.Link>
               <Navbar.Link href="#">Layanan</Navbar.Link>
            </Navbar.Content>
         </Navbar.Brand>

         {/* Logo khusus untuk mobile - di ujung kanan */}
         <Navbar.Content 
            showIn="xs"
            css={{
               marginLeft: "auto",
               marginRight: "1.5rem"
            }}
         >
            <Image
               src="/logo.png"
               alt="PT Mutu Cipta Utama"
               width={85}
               height={55}
               style={{
                  objectFit: 'contain',
                  margin: '0.5rem 0'
               }}
            />
         </Navbar.Content>

         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="#"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
         </Navbar.Collapse>
         
         <style jsx>{`
            :global(.nextui-navbar) {
               border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
               box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05) !important;
               background: rgba(255, 255, 255, 0.95) !important;
               backdrop-filter: blur(10px) !important;
               min-height: 80px !important;
               padding: 0.5rem 1rem !important;
            }
            
            :global(.nextui-navbar-container) {
               padding: 0 1rem !important;
               max-width: 100% !important;
            }
            
            .desktop-logo {
               display: flex !important;
               align-items: center !important;
               padding: 0.5rem 0 !important;
            }
            
            @media (max-width: 650px) {
               .desktop-logo {
                  display: none !important;
               }
               
               :global(.nextui-navbar) {
                  min-height: 70px !important;
                  padding: 0.25rem 0.5rem !important;
               }
               
               :global(.nextui-navbar-container) {
                  padding: 0 0.5rem !important;
               }
            }
         `}</style>
      </Navbar>
   );
};
