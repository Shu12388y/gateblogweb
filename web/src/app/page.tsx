import HeroSection from "@/components/HeroSection";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import CategorySection from "@/components/CategorySection";
import UpdatesTicker from "@/components/UpdatesTicker";
import AboutSection from "@/components/AboutSection";
import Newsletter from "@/components/Newsletter";


export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <FeaturedBlogs /> */}
      <CategorySection />
      <UpdatesTicker />
      <AboutSection />
      <Newsletter />
    </>
  );
}
