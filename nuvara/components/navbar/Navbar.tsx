"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-nuvara-beige bg-nuvara-cream">
      <nav className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="text-2xl font-semibold tracking-wide text-nuvara-brown"
          >
            Nuvara
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <Link
                href="/"
                className="text-sm text-nuvara-brown transition-colors hover:text-nuvara-gold"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/shop"
                className="text-sm text-nuvara-brown transition-colors hover:text-nuvara-gold"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="text-sm text-nuvara-brown transition-colors hover:text-nuvara-gold"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                className="text-sm text-nuvara-brown transition-colors hover:text-nuvara-gold"
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-sm text-nuvara-brown transition-colors hover:text-nuvara-gold"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Cart + mobile menu button */}
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="rounded-full border border-nuvara-gold px-5 py-2 text-sm text-nuvara-brown transition-colors hover:bg-nuvara-gold hover:text-white"
            >
              Cart
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 text-nuvara-brown md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <ul className="mt-5 flex flex-col gap-4 border-t border-nuvara-beige pt-5 md:hidden">
            <li>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-nuvara-brown"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/shop"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-nuvara-brown"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-nuvara-brown"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-nuvara-brown"
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-nuvara-brown"
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}