import React from "react";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      <Body />
      <Footer />
    </main>
  );
}
