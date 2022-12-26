import React from "react";
import { HotelByCity } from "../../data/Data";
import "./CityHotel.scss";
import UseFetch from "../../hooks/UseFetch";

const CityHotel = () => {
  // imported from UseFetch function
  // to put the main url link in the UseFetch function, you need to include the ""proxy":"http://localhost:5000"" in the react "package.json"
  const { data, loading, error } = UseFetch(
    "/hotelscountByCity?cities=berlin,madrid,massawa"
  );
  return (
    <section className="city-based-hotels">
      {loading ? (
        "Loading please wait ..."
      ) : (
        <React.Fragment>
          {HotelByCity.map(({ image, alt, title, number }) => {
            return (
              <article className="feactured-items">
                <figure className="hotel-image">
                  <img src={image} alt={alt} />
                </figure>
                <h1 className="feturedtitle"> {title} </h1>
                <h3 className="featuredNumber"> {number} </h3>
              </article>
            );
          })}
        </React.Fragment>
      )}
    </section>
  );
};

export default CityHotel;
