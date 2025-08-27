import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {createTheme, NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import {initWebVitals} from '../utils/performance';

const lightTheme = createTheme({
   type: 'light',
   theme: {
      colors: {},
   },
});

const darkTheme = createTheme({
   type: 'dark',
   theme: {
      colors: {},
   },
});

function MyApp({Component, pageProps}: AppProps) {
   const router = useRouter();

   useEffect(() => {
      // Initialize web vitals tracking
      initWebVitals();

      // Track page views (replace with your analytics service)
      const handleRouteChange = (url: string) => {
         console.log('Page view:', url);
         // Example: gtag('config', 'GA_TRACKING_ID', { page_path: url });
      };

      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
         router.events.off('routeChangeComplete', handleRouteChange);
      };
   }, [router.events]);

   return (
      <NextThemesProvider
         defaultTheme='light'
         attribute="class"
         value={{
            light: lightTheme.className,
            dark: darkTheme.className,
         }}
      >
         <NextUIProvider>
            <Component {...pageProps} />
         </NextUIProvider>
      </NextThemesProvider>
   );
}

// Performance reporting function for Next.js
export function reportWebVitals(metric: any) {
   console.log('Web Vital:', metric);
   
   // Send to analytics service
   switch (metric.name) {
      case 'CLS':
      case 'FID':
      case 'FCP':
      case 'LCP':
      case 'TTFB':
         // Send to your analytics service
         break;
   }
}

export default MyApp;
