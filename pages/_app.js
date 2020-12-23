import React from "react";
import { GlobalStyles } from "../styles/globalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
