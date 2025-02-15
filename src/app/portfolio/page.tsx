import React from "react";
import Header from "../components/header";
import A from "../components/portfolio";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-card">
      <Header />
      <div className="pt-20"></div>
      <A />
      <div className="pb-20"></div>
      <Footer />
    </main>
  );
}
