import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar/>
       <AnimatePresence exitBeforeEnter initial={true}>

      <Component {...pageProps} />
       </AnimatePresence>
      <Footer/>
    </ChakraProvider>
  );
}

export default MyApp;
