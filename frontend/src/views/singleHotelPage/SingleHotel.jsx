import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import MailList from "../../components/mailList/MailList";
import { Hotels } from "../../data/Data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import "./SingleHotel.scss";
import Header from "../../components/header/Header";

const SingleHotel = () => {
  // State variable to control the slider
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  // Function to open image hotel
  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  // Function to handle slider image move 
  const sliderMove = (direction) => {
    let newSlideNumber;

    if(direction === "left") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <main>
      <Header />
      <div className="hotel-container">
        {/* Create a slider to see one image at a time */}
        {open && (
          <div className="slider">
            <GrClose className="close" onClick={() => setOpen(false)} />
            <FaArrowAltCircleLeft className="arrow" onClick={() => sliderMove("left")} />
            <figure className="slider-wrapper">
              <img
                src={Hotels[slideNumber].image}
                alt={Hotels[slideNumber].alt}
                className="slider-image"
              />
            </figure>
            <FaArrowAltCircleRight className="arrow" onClick={() => sliderMove("right")}  />
          </div>
        )}

        <div className="hotel-wrapper">
          <button className="book-now-btn">Reserve or Book Now</button>
          <h1 className="hotel-title"> Hilton Hotel</h1>

          <div className="hotel-address">
            <MdLocationPin className="hotel-location-icon" />
            <span>Hilton St. 124 New York</span>
          </div>

          <span className="hotel-distance">
            Excellent location - 500m from center
          </span>

          <span className="hotel-price">
            Book a stay over $140 at this property and get a free airport taxi
          </span>

          <div className="hotel-images-container">
            {Hotels.map(({ image, alt }, index) => {
              return (
                <figure key={index} className="hotel-image-wrapper">
                  <img
                    onClick={() => handleOpen(index)}
                    src={image}
                    alt={alt}
                    className="hotel-images"
                  />
                </figure>
              );
            })}
          </div>

          <div className="hotel-details">
            <div className="hotel-explanation">
              <h1 className="hotel-title"> Stay in the LisaConsult Hotels </h1>
              <p className="hotel-description">
                Whether you’re traveling for business or leisure, the chances
                are high that you’ll end up staying in a hotel. Here are the
                different types of hotel rooms we have around. There are
                different types of hotel rooms, with some having more or fewer
                features than others. While first-class hotels, such as 4-star
                and 5-star hotels, will have more attractive features, it
                doesn’t mean that downtown hotels don’t give them a run for
                their money.
              </p>
            </div>
            <div className="hotel-detail-price">
              <h1 className="hotel-title">Perfect for a 9-night stay</h1>
              <span>
                Located is not far from where you are. Just turn on navigation
                and you will be there.
              </span>
              <h2>
                <b> $900 </b> (9 nights)
              </h2>
              <button className="hotel-btn">Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
      </div>
    </main>
  );
};

export default SingleHotel;
