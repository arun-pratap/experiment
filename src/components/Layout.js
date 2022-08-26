import React from "react";
import { MDXProvider } from "@mdx-js/react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";
import "../style/customStyle.css";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div style={{ height: "75px" }}></div>
      {children}
      <Footer />
    </>
  );
}
