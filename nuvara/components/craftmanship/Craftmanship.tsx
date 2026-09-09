export default function Craftsmanship() {
  return (
    <section className="bg-nuvara-cream py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-nuvara-gold">
            Crafted by Hand
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-nuvara-brown sm:text-4xl">
            The beauty is in the details.
          </h2>

          <p className="mt-5 text-base leading-7 text-nuvara-brown/70">
            Every Nuvara bag is created with patience, care, and attention to
            the little details that make each piece special.
          </p>
        </div>

        {/* Craftsmanship Points */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">

          {/* Point 1 */}
          <div className="text-center">
            <p className="text-sm font-medium text-nuvara-gold">
              01
            </p>

            <h3 className="mt-4 text-xl font-medium text-nuvara-brown">
              Carefully Selected
            </h3>

            <p className="mt-3 text-sm leading-6 text-nuvara-brown/70">
              We value materials that bring warmth, character, and quality to
              every handcrafted piece.
            </p>
          </div>

          {/* Point 2 */}
          <div className="text-center">
            <p className="text-sm font-medium text-nuvara-gold">
              02
            </p>

            <h3 className="mt-4 text-xl font-medium text-nuvara-brown">
              Thoughtfully Crafted
            </h3>

            <p className="mt-3 text-sm leading-6 text-nuvara-brown/70">
              Each bag receives careful attention throughout the crafting
              process, from the first detail to the final finish.
            </p>
          </div>

          {/* Point 3 */}
          <div className="text-center">
            <p className="text-sm font-medium text-nuvara-gold">
              03
            </p>

            <h3 className="mt-4 text-xl font-medium text-nuvara-brown">
              Made with Care
            </h3>

            <p className="mt-3 text-sm leading-6 text-nuvara-brown/70">
              We create pieces designed to be enjoyed, carried, and cherished
              for years to come.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}