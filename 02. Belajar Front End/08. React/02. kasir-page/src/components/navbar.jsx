import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State untuk mengontrol visibilitas submenu
  const [isSolusiBisnisOpen, setIsSolusiBisnisOpen] = useState(false);

  // Fungsi untuk toggle submenu
  const arrowSolusiRef = useRef(null);
  const toggleSolusiBisnis = () => {
    setIsSolusiBisnisOpen(!isSolusiBisnisOpen);
    console.log(isSolusiBisnisOpen)
    if (arrowSolusiRef.current) {
      arrowSolusiRef.current.classList.toggle("rotate-180");
    } 
    arrowSolusiRef.current.classList.add("duration-500")
  };

  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const toggleMenu = () => {
    setIsToggleOpen(!isToggleOpen);
  }

  return (
    <header className="flex absolute top-0 w-full h-auto shadow-md p-3 font-montserrat bg-white z-10">
      <div className="flex space-x-2 ps-2 md:ps-10">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" />
        <span className="text-xl font-bold mt-2 lg:mt-2"><Link to="/">KasirQ</Link></span>
      </div>
      <div className="flex ms-auto pe-14 space-x-3">
        <ol className="hidden lg:flex space-x-5 mt-1 font-medium relative">
          <li className="cursor-pointer hover:bg-teal-100 p-2 rounded-md">Beranda</li>
          <li
            className="cursor-pointer hover:bg-teal-100 p-2 rounded-md"
            onClick={toggleSolusiBisnis}
          >
            Solusi Bisnis 
            <span className="inline-block">
              <svg ref={arrowSolusiRef} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 ps-0.5 ms-1 text-teal-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </li>
          {isSolusiBisnisOpen && (
            <div
              className="absolute inset-y-14 right-12 rounded-md"
              id="solusi-bisnis"
            >
                <ol className="bg-white p-2 rounded-md space-y-2 shadow-md">
                    <ul className="cursor-pointer hover:bg-teal-100 p-1 rounded-md">Aplikasi Kasir Cafe</ul>
                    <ul className="cursor-pointer hover:bg-teal-100 p-1 rounded-md">Aplikasi Kasir Retail</ul>
                    <ul className="cursor-pointer hover:bg-teal-100 p-1 rounded-md">Aplikasi Kasir Laundry</ul>
                </ol>
            </div>
          )}
          <li className="cursor-pointer hover:bg-teal-100 p-2 rounded-md">Fitur</li>
          <li className="cursor-pointer hover:bg-teal-100 p-2 rounded-md">Blog</li>
        </ol>
        <button className="hidden lg:inline-block bg-teal-500 rounded-3xl text-white font-medium px-6 hover:bg-teal-600 tracking-tight">
          <Link to="/login">Login</Link>
        </button>
        <button className="hidden lg:inline-block border-2 border-teal-500 rounded-3xl text-teal-500 font-medium px-6 hover:border-teal-600 tracking-tight">
          <Link to="/register">Daftar</Link>
        </button>
      </div>
      <div className="toggle">
        <button onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-3 me-3 lg:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      {isToggleOpen && (
        <div className="absolute inset-0 inset-x-0 inset-y-16 rounded-md ">
          <ol className="absolute top-0 space-y-2 w-full rounded-b-md bg-white p-2 cursor-pointer shadow-md">
            <ul className="hover:bg-teal-100 p-1 font-medium">Beranda</ul>
            <ul onClick={toggleSolusiBisnis} className="hover:bg-teal-100 p-1 font-medium inline-block">Solusi Bisnis 
                <span className="inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 ps-0.5 text-teal-500" id="arrow-svg" ref={arrowSolusiRef}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
            </ul>
            {isSolusiBisnisOpen && (
              <ol className="space-y-2 ms-3">
                <ul className="hover:bg-teal-100 p-1">Aplikasi Kasir Cafe</ul>
                <ul className="hover:bg-teal-100 p-1">Aplikasi Kasir Retail</ul>
                <ul className="hover:bg-teal-100 p-1">Aplikasi Kasir Laundry</ul>
              </ol> 
            )}
             
            <ul className="hover:bg-teal-100 p-1 font-medium">Fitur</ul>
            <ul className="hover:bg-teal-100 p-1 font-medium">Blog</ul>
            <div className="flex space-x-2">
              <ul className="ms-1 mb-1 font-medium bg-teal-500 rounded-full py-1 px-5 text-white hover:bg-teal-600"><Link to="/login">Masuk</Link></ul>
              <ul className="mb-1 font-medium border-2 border-teal-500 hover:border-teal-700 rounded-full py-1 px-5 text-teal-500 hover:text-teal-700"><Link to="/register">Daftar</Link></ul>
            </div>
          </ol>
          
        </div>
      )}
      
    </header>
  );
};

export default Navbar;
