import React from 'react';
import Link from "next/link";
import Search from "@/app/components/Search";

const Navbar = () => {
  return (
    <nav className="sticky top-0 p-4 flex flex-col md:flex-row justify-between bg-slate-600 drop-shadow-xl">
      <h1 className="grid place-content-center mb-2 md:mb-0 text-3xl font-bold text-white">
        <Link href="/">Next Step</Link>
      </h1>
      <Search/>
    </nav>
  );
};

export default Navbar;