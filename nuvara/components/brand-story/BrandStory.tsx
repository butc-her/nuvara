import Image from "next/image";
import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="bg-nuvara-beige py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">

        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-nuvara-cream">
          <Image
            src="/images/products/bag-4.jpg"
            alt="Nuvara handcrafted wool bag"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-nuvara-gold">
            Why Nuvara
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-nuvara-brown sm:text-4xl">
            Made with intention.
          </h2>

          <p className="mt-6 text-base leading-7 text-nuvara-brown/70">
            At Nuvara, every bag is thoughtfully handcrafted with a focus on
            warmth, character, and lasting beauty. We believe the things we
            carry should feel as special as the moments they become part of.
          </p>

          <p className="mt-4 text-base leading-7 text-nuvara-brown/70">
            From carefully chosen wool to the final details, each piece is
            created with care and a love for timeless design.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-nuvara-brown px-8 py-3.5 text-sm font-medium text-nuvara-brown transition-colors hover:bg-nuvara-brown hover:text-white"
          >
            Discover Our Story
          </Link>
        </div>

      </div>
    </section>
  );
}