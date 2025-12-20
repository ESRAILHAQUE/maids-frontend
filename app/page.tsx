import Banner from "./Components/HomePageComponents/Banner";

import AboutUs from "./Components/HomePageComponents/AboutUs";
import WhyChooseUs from "./Components/HomePageComponents/WhyChooseUs";
import OurServices from "./Components/HomePageComponents/OurServices";

import OurTeam from "./Components/HomePageComponents/OurTeam";
import CommercialCleaningCTA from "./Components/HomePageComponents/CommercialCleaningCTA";
import WorkingProcess from "./Components/HomePageComponents/WorkingProcess";
import ClientReview from "./Components/HomePageComponents/ClientReview";
import OurBlog from "./Components/HomePageComponents/OurBlog";
import Map from "./Components/HomePageComponents/Map";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <AboutUs />
      <WhyChooseUs />
      <OurServices />
      <OurTeam />
      <CommercialCleaningCTA />
      <WorkingProcess />
      <ClientReview />
      <OurBlog />
      <Map />
    </main>
  );
}
