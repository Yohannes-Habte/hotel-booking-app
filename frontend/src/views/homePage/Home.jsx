import React from "react";
import BedRooms from "../../components/bedRoom/BedRooms";
import CityHotel from "../../components/cityHotel/CityHotel";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import TraditionalHotel from "../../components/traditionalHotel/TraditionalHotel";
import "./Home.scss";

const Home = () => {
  return (
    <main>
      <Header />
      <section className="home-container">
        <h1 className="home-title">Browse By City</h1>
        <CityHotel /> {/* Featured */}
        <h1 className="home-title">Bed Room View</h1>
        <BedRooms /> {/* PropertyList */}
        <h1 className="home-title">Traditional Houses</h1>
        <TraditionalHotel /> {/* FeaturedProperties */}
        <MailList />
      </section>
    </main>
  );
};

export default Home;
