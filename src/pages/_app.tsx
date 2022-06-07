// import '../styles/global.scss'

import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { colors, GlobalStyle } from '../assets/styles/global';
import { Footer } from '../components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Aos from 'aos';

const shadows = {
  outline: `0 0 0 0.2rem ${colors.primary}`,
};

import 'aos/dist/aos.css';
import { useRouter } from 'next/router';

const theme = extendTheme({ shadows });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    Aos.init({
      offset: 250,
    });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <GlobalStyle />
        {router.pathname === '/' ? (
          <>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </>
        ) : (
          <Component {...pageProps} />
        )}
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
