import AboutInHome from "@/components/AboutInHome";
import FeatureCards from "@/components/FeatureCards";
import FlightOffers from "@/components/FlightOffers";
import HeroSection from "@/components/HeroSection";
import SubscribeNow from "@/components/SubscribeNow";
import TopDestinations from "@/components/TopDestinations";



export default function Home() {
  return (
    <>
      <div className="hero-section w-full min-h-[550px] h-full bg-center bg-cover bg-no-repeat " style={{backgroundImage: 'linear-gradient(rgba(37, 150, 190, 0.5) 25%, transparent), url("/skybackground.jpg")'}} >
        <div className="lg:container mx-auto w-full min-h-[550px] h-full flex justify-center items-start pt-14  relative">
          <HeroSection />
        </div>
      </div>
      <div className="lg:container mx-auto py-8 flex flex-col gap-8">
        <FeatureCards />
        <TopDestinations />
      </div>
      <div className="w-full bg-gray-100 h-full py-3 bg-center bg-cover bg-no-repeat bg-fixed" style={{backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.2) , rgba(0, 0, 0, 0.5)), url("/mountain2.jpg")'}}>
        <div className="lg:container py-8 mx-auto">
          <FlightOffers />
        </div>
      </div>
      <div className="w-full h-full py-3">
        <div className="max-w-[95%] sm:max-w-[94%] md:max-w-[95%] lg:container py-8 mx-auto">
          <AboutInHome />
          <SubscribeNow />
        </div>
      </div>
    </>
  );
}

