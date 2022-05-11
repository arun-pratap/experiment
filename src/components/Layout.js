import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "../style/style.css"
import Header from "./Header";
import Footer from "./Footer";


export default function Layout({ children, others }) {
    console.log(children[0],others)
  return (
    <>
      <Header />
      <main {...others}>{children}</main>
      <Footer />
    </>
  );
}
