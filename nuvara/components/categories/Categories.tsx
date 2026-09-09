import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  return (
    <section className="bg-nuvara-beige py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-nuvara-gold">
            Explore Nuvara
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-nuvara-brown sm:text-4xl">
            Find a bag that feels like you.
          </h2>

          <p className="mt-5 text-base leading-7 text-nuvara-brown/70">
            Explore our collection of thoughtfully handcrafted wool bags,
            created for different moments and everyday needs.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {/* Category 1 */}
          <Link href="/shop" className="group">
            <div className="relative aspect-[4/5] overflow-hidden bg-nuvara-cream">
              <Image
                src="/images/products/bag-1.jpg"
                alt="Everyday wool bags"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-medium text-nuvara-brown">
                Everyday Bags
              </h3>

              <p className="mt-2 text-sm leading-6 text-nuvara-brown/70">
                Practical handcrafted pieces made for everyday moments.
              </p>

              <span className="mt-4 inline-block text-sm font-medium text-nuvara-gold">
                Explore Collection →
              </span>
            </div>
          </Link>

          {/* Category 2 */}
          <Link href="/shop" className="group">
            <div className="relative aspect-[4/5] overflow-hidden bg-nuvara-cream">
              <Image
                src="/images/products/bag-2.jpg"
                alt="Wool tote bags"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-medium text-nuvara-brown">
                Wool Totes
              </h3>

              <p className="mt-2 text-sm leading-6 text-nuvara-brown/70">
                Spacious and versatile designs crafted with character.
              </p>

              <span className="mt-4 inline-block text-sm font-medium text-nuvara-gold">
                Explore Collection →
              </span>
            </div>
          </Link>

          {/* Category 3 */}
          <Link href="/shop" className="group">
            <div className="relative aspect-[4/5] overflow-hidden bg-nuvara-cream">
              <Image
                src="/images/products/bag-3.jpg"
                alt="Signature wool bags"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-medium text-nuvara-brown">
                Signature Pieces
              </h3>

              <p className="mt-2 text-sm leading-6 text-nuvara-brown/70">
                Distinctive handcrafted designs for something truly special.
              </p>

              <span className="mt-4 inline-block text-sm font-medium text-nuvara-gold">
                Explore Collection →
              </span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}