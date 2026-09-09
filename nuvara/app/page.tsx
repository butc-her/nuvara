import Hero from "@/components/home/Hero";
import FeaturedCollection from "@/components/featured/FeaturedCollection"
import BrandStory from "@/components/brand-story/BrandStory";
import Craftsmanship from "@/components/craftmanship/Craftmanship"
import Categories from "@/components/categories/Categories"
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCollection />
      <BrandStory />
      <Craftsmanship />
      <Categories />
      <Footer />
    </main>
  );
}