import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-nuvara-nude">
        <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-12">
          
          {/* Hero Content */}
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-nuvara-gold-dark">
              Handcrafted with care
            </p>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-nuvara-brown sm:text-6xl">
              Timeless bags,
              <span className="block">beautifully crafted.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-nuvara-brown/70 sm:text-lg">
              Discover thoughtfully handcrafted wool bags designed to bring
              warmth, character, and timeless style to every moment.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-nuvara-gold px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-nuvara-gold-dark"
              >
                Shop Collection
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-nuvara-gold px-7 py-3 text-sm font-medium text-nuvara-brown transition-colors hover:bg-nuvara-gold hover:text-white"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/hero/nuvara-hero.jpg"
              alt="Handcrafted Nuvara wool bag"
              width={1200}
              height={1200}
              priority
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </section>
    </main>
  );
}