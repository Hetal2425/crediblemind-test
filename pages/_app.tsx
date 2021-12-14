import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core/styles';
import {theme} from '../theme';
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/auth';

function myApp({ Component, pageProps:{ session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider theme={theme}>   
      <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>
     
    </ThemeProvider>)
}

export default myApp
