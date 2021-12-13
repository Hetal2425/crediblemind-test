import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core/styles';
import {theme} from '../theme';
// import type { AppProps } from 'next/app'
// import {SessionProvider} from 'next-auth/react'
// import Auth from '../components/Auth';
// import Index from '../components/index'


function myApp({ Component, pageProps:{ session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
     {/* <SessionProvider>
        <Index/> */}
      <Component {...pageProps} />
    {/* </SessionProvider> */}
    </ThemeProvider>)
}

export default myApp
