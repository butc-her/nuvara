import Image from "next/image";
import Link from "next/link";

export default function FeaturedCollection() {
return ( <section className="bg-nuvara-cream py-24"> <div className="mx-auto max-w-7xl px-6">

    {/* Section Heading */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-nuvara-gold">
        Featured Collection
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-nuvara-brown sm:text-4xl">
        Pieces made to be cherished
      </h2>

      <p className="mt-5 text-base leading-7 text-nuvara-brown/70">
        Explore a selection of handcrafted wool bags, thoughtfully made
        with warmth, character, and timeless style.
      </p>
    </div>

    {/* Product Cards */}
    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {/* Product 1 */}
      <article>
        <div className="relative aspect-[4/5] overflow-hidden bg-nuvara-beige">
          <Image
            src="/images/products/bag-1.jpg"
            alt="Handcrafted wool bag"
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-medium text-nuvara-brown">
            Classic Wool Bag
          </h3>

          <p className="mt-2 text-sm text-nuvara-brown/70">
            A timeless handcrafted piece designed for everyday moments.
          </p>

          <p className="mt-3 text-sm font-medium text-nuvara-gold">
            ₦XX,XXX
          </p>
        </div>
      </article>

      {/* Product 2 */}
      <article>
        <div className="relative aspect-[4/5] overflow-hidden bg-nuvara-beige">
          <Image
            src="/images/products/bag-2.jpg"
            alt="Handcrafted wool bag"
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-medium text-nuvara-brown">
            Everyday Wool Tote
          </h3>

          <p className="mt-2 text-sm text-nuvara-brown/70">
            Spacious, practical, and carefully crafted for everyday use.
          </p>

          <p className="mt-3 text-sm font-medium text-nuvara-gold">
            ₦XX,XXX
          </p>
        </div>
      </article>

      {/* Product 3 */}
      <article>
        <div className="relative aspect-[4/5] overflow-hidden bg-nuvara-beige">
          <Image
            src="/images/products/bag-3.jpg"
            alt="Handcrafted wool bag"
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-medium text-nuvara-brown">
            Signature Wool Bag
          </h3>

          <p className="mt-2 text-sm text-nuvara-brown/70">
            A distinctive handcrafted design made to add character to
            every look.
          </p>

          <p className="mt-3 text-sm font-medium text-nuvara-gold">
            ₦XX,XXX
          </p>
        </div>
      </article>

    </div>

    {/* View Collection Button */}
    <div className="mt-14 text-center">
      <Link
        href="/shop"
        className="inline-flex items-center justify-center rounded-full bg-nuvara-gold px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-nuvara-gold-dark"
      >
        View Collection
      </Link>
    </div>

  </div>
</section>

);
}
