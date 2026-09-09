import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-88px)] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(47, 41, 37, 0.55), rgba(47, 41, 37, 0.55)), url('/images/hero/hero-image.jpg')",
      }}
    >
      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-nuvara-beige">
          Handcrafted with care
        </p>

        <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
          Timeless bags,
          <span className="block">beautifully crafted.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
          Discover thoughtfully handcrafted wool bags designed to bring
          warmth, character, and timeless style to every moment.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-full bg-nuvara-gold px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-nuvara-gold-dark"
          >
            Shop Collection
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-nuvara-brown"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
} 