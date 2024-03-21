import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/30">
        <Header />
      </header>
      <main className="bg-neutral">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
