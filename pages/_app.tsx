import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import "cal-sans";

import theme from "../src/theme";
import Layout from "@/components/layout";
import CmdPalette from "@/components/cmd-palette";
import CmdPaletteProvider from "src/providers/cmd-palette-provider";

import "../style.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="Mohamed LAAJAJ - Junior Data Analyst."
        description="Junior Data Analyst"
        twitter={{
          cardType: "summary_large_image",
          handle: "@MohamedLAAJAJ",
        }}
        openGraph={{
          url: "https://nikolovlazar.com",
          title: "Mohamed LAAJAJ - Junior Data Analyst.",
          description:
            "Junior Data Analyst",
          locale: "en_US",
          images: [
            {
              url: "https://nikolovlazar.com/assets/images/social.png",
              width: 1200,
              height: 630,
              alt: "Mohamed LAAJAJ",
              type: "image/png",
            },
          ],
        }}
      />
      <CmdPaletteProvider>
        <Layout>
          <CmdPalette />
          <Component {...pageProps} />
        </Layout>
      </CmdPaletteProvider>
    </ChakraProvider>
  );
};

export default App;
