"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import styles from "@/styles/header.module.css";
import Container from "./Container";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4 px-2 md:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-pink-500 tracking-wider"
          >
            E-Store
          </Link>

          {/* Search Bar */}
          <SearchBar />

          {/* Desktop Nav */}
          <NavBar />

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl text-gray-700"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <MobileSideBar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Dark Overlay */}
        {isMobileMenuOpen && (
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </Container>
    </header>
  );
};

export default Header;


const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center w-full max-w-md mx-6">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search for electronics, fashion, accessories..."
          className="w-full pl-5 pr-12 py-2 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none text-sm"
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-full transition shadow-md">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};


const NavBar = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
      <Link href="/" className="hover:text-pink-500 transition">
        Home
      </Link>
      <Link href="/store" className="hover:text-pink-500 transition">
        Store
      </Link>
      <Link
        href="/cart"
        className="relative hover:text-pink-500 transition"
      >
        <FaShoppingCart className="text-xl" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full font-bold animate-pulse">
          3
        </span>
      </Link>
    </nav>
  );
};

const MobileSideBar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-5">
        {/* Search in Mobile */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-pink-500 text-white px-3 py-2 rounded-full hover:bg-pink-600 shadow-md">
            <FaSearch />
          </button>
        </div>

        <nav className="flex flex-col gap-4 text-gray-800 text-base font-medium">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/store" onClick={() => setIsMobileMenuOpen(false)}>
            Store
          </Link>
          <Link
            href="/cart"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative flex items-center"
          >
            <FaShoppingCart className="text-xl mr-2" />
            Cart
            <span className="ml-2 bg-red-500 text-white rounded-full text-xs font-bold px-1.5">
              3
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
};
