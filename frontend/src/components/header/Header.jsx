import React, { useState } from "react";
import "./Header.scss";
import { FaBed, FaPlane, FaCarSide, FaTaxi,  FaCalendarAlt } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { DateRange } from "react-date-range";
import { format } from 'date-fns';
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";

const Header = ( { type } ) => {
 
  // State variable for the date-range
  const [destination, setDestination] = useState("");
  const [ openDate, setOpenDate ] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // State variables for the adult, children and room selection options
  const [openOptions, setOpenOptions] = useState(false);
  const [ options, setOptions ] = useState({
    adult: 1,
    children: 0,
    room: 1
  });


  // Function to control date selection 
  const dateSelection = () => { 
    setOpenDate(!openDate)
  }

  // Function to control adult, children and room selection 
  const handleAdultChildrenRoom = () => { 
    setOpenOptions(!openOptions);
  }

  // Function that handle amount options for the adult, children and room
  const handleOption = (name, operation) => {
    setOptions( previous => {
      return {
        ...previous, [name]: operation === "increase" ? options[name] + 1 : options[name] - 1
      }
    })
  };

   // useNavigate used to navigate to "Hotel page"
  const navigate = useNavigate()

  // Function that handle the search button. The {state: {destination, date, options}} is used to transfer the variable to other location (e.g. List Page)
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } })
  }


  return (
    <section className="header">
      <article className={type === "list" ? "header-container list-mode" : "header-container"}>
        <div className="header-list">
          <div className="header-list-item active">
            <FaBed className="header-list-item-icon" />
            <span className="header-list-item-span"> Stays </span>
          </div>

          <div className="header-list-item">
            <FaPlane className="header-list-item-icon" />
            <span className="header-list-item-span"> Flights </span>
          </div>

          <div className="header-list-item">
            <FaCarSide className="header-list-item-icon" />
            <span className="header-list-item-span"> Car Rental </span>
          </div>

          <div className="header-list-item">
            <FaBed className="header-list-item-icon" />
            <span className="header-list-item-span"> Attractions </span>
          </div>

          <div className="header-list-item">
            <FaTaxi className="header-list-item-icon" />
            <span className="header-list-item-span"> Airport Taxis </span>
          </div>
        </div>

        {/* 
        This portion should not be reflected in the "List Page". 
        This could be controlled using the "type" for the <React.Fragment>
        stated below.
      */}
        { type !== "list" && <React.Fragment>
        <h1 className="header-title"> Save 20% on Discount for this Month </h1>
        <p className="header-description">
          Get Reward for four travels - unlock instant savings of 20% or more
          with a free LisaConsult booking account.
        </p>
        <button className="header-btn"> Sigin / Register</button>

        <div className="header-search">
          <div className="header-search-icon">
            <FaBed className="search-icon" />
            <input
              type="text"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              placeholder="Where are you going?"
              className="header-search-input"
            />
          </div>

          <div className="header-search-icon">
            <FaCalendarAlt className="search-icon" />
            <span className="header-search-option" onClick={dateSelection} >
              { `${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}` }
            </span>
            { openDate === true &&  <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              minDate={new Date()}
              className="date-selection"
            /> }
          </div>

          <div className="header-search-icon">
            <GiPerson className="search-icon" />
            <span className="header-search-option" onClick={handleAdultChildrenRoom} >
              {`${options.adult} adult | ${options.children} children | ${options.room} room`}
            </span>
            {openOptions && <div className="options">
              <div className="option-item">
                <span className="option-span"> Adult </span>
                <div className="option-counter">
                  <button disabled={options.adult <= 1} className="option-btn" onClick={() => {handleOption("adult", "decrease")}}> - </button>
                  <span className="option-count-number"> {options.adult} </span>
                  <button className="option-btn" onClick={() => {handleOption("adult", "increase")}}> + </button>
                </div>
              </div>

              <div className="option-item">
                <span className="option-span"> Children </span>
                <div className="option-counter">
                  <button disabled={options.children <= 0} className="option-btn" onClick={() => {handleOption("children", "decrease")}}> - 
                  </button>
                  <span className="option-count-number"> {options.children} </span>
                  <button className="option-btn" onClick={() => {handleOption("children", "increase")}}> + </button>
              </div>
              </div>

              <div className="option-item">
                <span className="option-span"> Room </span>
                <div className="option-counter">
                  <button disabled={options.room <= 1} className="option-btn" onClick={() => {handleOption("room", "decrease")}}> - </button>
                  <span className="option-count-number"> {options.room} </span>
                  <button className="option-btn" onClick={() => {handleOption("room", "increase")}}> + </button>
              </div>
              </div>

            </div> }
          </div>

          <div className="header-search-icon">
            <button className="header-btn" onClick={handleSearch}>Search</button> 
            {/* When I click on the "Search" button, I will see the "List Page" */}
          </div>
        </div>

        </React.Fragment>}

      </article>
    </section>
  );
};

export default Header;
