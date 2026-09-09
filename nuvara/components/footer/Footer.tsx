import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-nuvara-brown text-nuvara-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Footer Content */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">
              Nuvara
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-nuvara-cream/70">
              Thoughtfully handcrafted wool bags made with warmth,
              character, and timeless style.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.2em]">
              Shop
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-nuvara-cream/70">
              <li>
                <Link
                  href="/shop"
                  className="transition-colors hover:text-white"
                >
                  Collection
                </Link>
              </li>

              <li>
                <Link
                  href="/shop"
                  className="transition-colors hover:text-white"
                >
                  Featured Bags
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.2em]">
              Contact
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-nuvara-cream/70">
              <li>
                <a
                  href="mailto:hello@nuvara.com"
                  className="transition-colors hover:text-white"
                >
                  hello@nuvara.com
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-nuvara-cream/20 pt-6">
          <p className="text-sm text-nuvara-cream/60">
            © {new Date().getFullYear()} Nuvara. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}