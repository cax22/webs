import React from "react";
import Header from "../components/header";
import Ab from "../components/about";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-card">
      <Header />
      <div className="pt-20"></div>
      <Ab />
      <div className="pb-20"></div>
      <Footer />
    </main>
  );
}
