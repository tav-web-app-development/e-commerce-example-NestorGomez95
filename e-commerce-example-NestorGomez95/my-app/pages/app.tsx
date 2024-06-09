import '../styles/globals.css';
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartProvider } from '../context/Cart';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  );
};

export default MyApp;

