//comonentes de next
import Head from "next/head";

//chakra-ui
import { Box } from "@chakra-ui/react";

//componentes
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ title, children, description }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#666666" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="favicon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <title>{title}</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default Layout;
