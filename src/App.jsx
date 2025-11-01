import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import Cards from "./sections/Cards";
import TextSection from "./sections/TextSection";
import Modulecards from "./sections/Modulecards";
import Links from "./sections/Links";
import CompanyCards from "./sections/CompanyCards";
import SecondCard from "./sections/SecondCard";
import PeopleThoghtCards from "./sections/PeopleThoghtCards";
import Detail from "./sections/Detail";
import LastCard from "./sections/LastCard";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <TextSection />
      <Modulecards />
      <Links />
      <CompanyCards />
      <SecondCard />
      <PeopleThoghtCards />
      <Detail />
      <LastCard />
      <Footer/>
    </>
  );
};

export default App;
