import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Image from "next/image";
import axios from "axios";
import { NextSeo } from "next-seo";

import MessageForm from "components/MessageForm";
import TextContent from "components/TextContent";
import Header from "components/Header";

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
    background-color: #141419;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    margin: 0;
    padding: 0;
  }

  #root, #__next {
    isolation: isolate;
  }

  body {
    
    font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    padding: 0;
    margin: 0;
  }
`;

const PageContainer = styled.div`
  background-color: #110c1d;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  @media (max-width: 1140px) {
    flex-direction: column;

    justify-content: flex-start;
  }
  @media (max-width: 760px) {
    padding: 20px;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const ColorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #151f33;
  opacity: 0.9;
  z-index: 1;
`;

const StyledImage = styled(Image)``;

export default function Home() {
  return (
    <PageContainer>
      <NextSeo
        title="Gracias, Marcelo."
        description="Share your message of thanks with Marcelo."
        canonical="https://gracias-marcelo.lufctrust.com/"
        openGraph={{
          url: "https://gracias-marcelo.lufctrust.com/",
          title: "Gracias, Marcelo.",
          description: "Share your message of thanks with Marcelo.",
          images: [
            {
              url: "https://gracias-marcelo.lufctrust.com/openGraphImage.jpg",
              width: 1200,
              height: 630,
              alt: "Gracias, Marcelo",
              type: "image/jpeg",
            },
          ],
          site_name: "Gracias, Marcelo.",
        }}
        twitter={{
          handle: "@lufctrust",
          site: "https://gracias-marcelo.lufctrust.com/",
          cardType: "summary_large_image",
        }}
      />
      <GlobalStyle />
      <Header />
      <InnerContainer>
        <TextContent />
        <MessageForm />
      </InnerContainer>
    </PageContainer>
  );
}
