import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import "./HotelLists.scss";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import MailList from "../../components/mailList/MailList";
import UseFetch from "../../hooks/UseFetch";

const HotelLists = () => {
  // State variables
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const {data, loading, error} = UseFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`)

  // Function that handle Search button 
  const handleClick = () => {};

  return (
    <main>
      <div className="hotel-lists-container">
        <div className="hotel-lists-wrapper">
          <section className="hotel-lists-search">
            <h1 className="search-list-title">Search Hotel</h1>
            <div className="search-list-items">
              <label htmlFor="destination">Destination</label>
              <input type="text" id="destination" placeholder={destination} />
            </div>

            <div className="search-list-items">
              <label htmlFor="destination">Check-id Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>

              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className="options-list-item-container">
              <h4> Options </h4>
              <div className="options">
                <div className="option-items">
                  <span className="option-item-text">
                    Min Price <small>Per Night</small>
                  </span>
                  <input type="number" onChange={(event)=> setMin(event.target.value)} className="option-item-input" />
                </div>

                <div className="option-items">
                  <span className="option-item-text">
                    Max Price <small>Per Night</small>
                  </span>
                  <input type="number" onChange={(event)=> setMax(event.target.value)} className="option-item-input" />
                </div>

                <div className="option-items">
                  <span className="option-item-text"> Adult </span>
                  <input
                    type="number"
                    className="option-item-input"
                    min={1}
                    placeholder={options.adult}
                  />
                </div>

                <div className="option-items">
                  <span className="option-item-text"> Children </span>
                  <input
                    type="number"
                    className="option-item-input"
                    min={0}
                    placeholder={options.children}
                  />
                </div>

                <div className="option-items">
                  <span className="option-item-text"> Room </span>
                  <input
                    type="number"
                    className="option-item-input"
                    min={1}
                    placeholder={options.room}
                  />
              </div>
              </div>
            </div>
            <button className="hotel-list-search-btn" onClick={handleClick}>Search</button>
          </section>

          <div className="hotel-lists-result">
              <SearchItem />
          </div>
        </div>

        <MailList />
      </div>
    </main>
  );
};

export default HotelLists;
