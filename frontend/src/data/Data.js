import React from "react";
import UseFetch from "../hooks/UseFetch";

// Hotels By City
import Massawa from "../assets/Massawa.jpg";
import Thailand from "../assets/thailand.jpg";
import Berlin from "../assets/nederland.jpg";

// Hotel Bed rooms
import bedRoom1 from "../assets/room1.jpg";
import bedRoom2 from "../assets/room2.jpg";
import bedRoom3 from "../assets/room3.jpg";
import bedRoom5 from "../assets/room5.jpg";

// Traditional Hotels
import traditionalHotel1 from "../assets/traditional-hotel-1.jpg";
import traditionalHotel2 from "../assets/traditional-hotel-2.jpg";
import traditionalHotel4 from "../assets/traditional-hotel-4.jpg";
import traditionalHotel5 from "../assets/traditional-hotel-5.jpg";

// Hotel Images
import Hotel1 from "../assets/hotel1.jpg";
import Hotel2 from "../assets/hotel2.jpg";
import Hotel3 from "../assets/hotel3.jpg";
import Hotel4 from "../assets/hotel4.jpg";
import Hotel5 from "../assets/hotel5.jpg";
import Hotel6 from "../assets/hotel6.jpg";

// Hotel Images
export const Hotels = [
    {
        image: Hotel1,
        alt: "Massawa Hotel Image"
    },
    {
        image: Hotel2,
        alt: "Ethiopian Hotel Image"
    },
    {
        image: Hotel3,
        alt: "Thailand Hotel Image"
    },
    {
        image: Hotel4,
        alt: "Thailand Hotel Image"
    },
    {
        image: Hotel5,
        alt: "Dubai Hotel Image"
    },
    {
        image: Hotel6,
        alt: "Nederland Hotel Image"
    },
]

// Hotels By City
export const HotelByCity = [
    {
        image: Berlin,
        alt: "Nederland hotel image",
        title: "Berlin",
        number: "222 Properties"
    }, 
    {
        image: Thailand,
        alt: "Thailand hotel image",
        title: "Thailand",
        number: "234 Properties"
    }, 
    {
        image: Massawa,
        alt: "Eritrea hotel image",
        title: "Massawa",
        number:<h3> {} Properties</h3> 
    }, 
]

// Hotel Bed rooms
export const bedRooms = [
    {
        image: bedRoom1,
        alt: "Nederland hotel image",
        title: "Nererland",
        number: "123 Properties" 
    }, 
    {
        image: bedRoom2,
        alt: "Thailand hotel image",
        title: "Thailand",
        number: "234 Properties"
    }, 
    {
        image: bedRoom3,
        alt: "Eritrea hotel image",
        title: "Massawa",
        number:"321 Properties" 
    }, 
    {
        image: bedRoom5,
        alt: "Eritrea hotel image",
        title: "Massawa",
        number:"321 Properties" 
    }
]

// Traditional Hotels
export const TraditionalHotels =  [
    {
        imgage: traditionalHotel1,
        alt: "Nederland hotel image",
        title: "Nederland Traditional Hotel",
        name: "Nererland",
        price:"Starting from $120",
        rating: "8.3",
        level: "Very good"
    }, 
    {
        imgage: traditionalHotel2,
        alt: "Thailand hotel image",
        title: "Thailand Traditional Hotel",
        name: "Thailand",
        price:"Starting from $150",
        rating: "8.9",
        level: "Excellent"
    }, 
    {
        imgage: traditionalHotel5,
        alt: "Eritrea hotel image",
        title: "Keren Traditional Hotel",
        name: "Keren",
        price:"Starting from $120",
        rating: "8.7",
        level: "Quite good" 
    }, 
    {
        imgage: traditionalHotel4,
        alt: "Eritrea hotel image",
        title: "Massawa Traditional Hotel",
        name: "Massawa",
        price:"Starting from $170",
        rating: "9",
        level: "Excellent" 
    }
]

// Footer Lists 
export const FooterLists = [
    {
        country: "country",
        region: "region",
        city: "city",
        district: "district",
        airport: "airport",
        hotel: "hotel",
    },
    {
        country: "country",
        region: "region",
        city: "city",
        district: "district",
        airport: "airport",
        hotel: "hotel",
    },
    {
        country: "country",
        region: "region",
        city: "city",
        district: "district",
        airport: "airport",
        hotel: "hotel",
    },
    {
        country: "country",
        region: "region",
        city: "city",
        district: "district",
        airport: "airport",
        hotel: "hotel",
    },
    {
        country: "country",
        region: "region",
        city: "city",
        district: "district",
        airport: "airport",
        hotel: "hotel",
    }
]

// List of hotels search items
export const SearchItems = [
    {
        image: bedRoom1,
        title: "Tower Street Apartments",
        distance: "500m from center",
        taxi: "Free airport taxi",
        apartment: "Studio Apartment with Air conditioning",
        features: "Entire studio . 1 bathroom . 21m² 1 full bed",
        cancellation: "Free cancellation",
        flexibility: "You can cancel later, so lock in this great price today",
        evaluation: "Excellent",
        rating: 9.4,
        price: "$150",
        gross: "Includes taxes and fees",
        availability: "See Availability"
    },

    {
        image: bedRoom1,
        title: "Tower Street Apartments",
        distance: "500m from center",
        taxi: "Free airport taxi",
        apartment: "Studio Apartment with Air conditioning",
        features: "Entire studio . 1 bathroom . 21m² 1 full bed",
        cancellation: "Free cancellation",
        flexibility: "You can cancel later, so lock in this great price today",
        evaluation: "Excellent",
        rating: 9.4,
        price: "$150",
        gross: "Includes taxes and fees",
        availability: "See Availability"
    },

    {
        image: bedRoom1,
        title: "Tower Street Apartments",
        distance: "500m from center",
        taxi: "Free airport taxi",
        apartment: "Studio Apartment with Air conditioning",
        features: "Entire studio . 1 bathroom . 21m² 1 full bed",
        cancellation: "Free cancellation",
        flexibility: "You can cancel later, so lock in this great price today",
        evaluation: "Excellent",
        rating: 9.4,
        price: "$150",
        gross: "Includes taxes and fees",
        availability: "See Availability"
    },
    {
        image: bedRoom1,
        title: "Tower Street Apartments",
        distance: "500m from center",
        taxi: "Free airport taxi",
        apartment: "Studio Apartment with Air conditioning",
        features: "Entire studio . 1 bathroom . 21m² 1 full bed",
        cancellation: "Free cancellation",
        flexibility: "You can cancel later, so lock in this great price today",
        evaluation: "Excellent",
        rating: 9.4,
        price: "$150",
        gross: "Includes taxes and fees",
        availability: "See Availability"
    },
    {
        image: bedRoom1,
        title: "Tower Street Apartments",
        distance: "500m from center",
        taxi: "Free airport taxi",
        apartment: "Studio Apartment with Air conditioning",
        features: "Entire studio . 1 bathroom . 21m² 1 full bed",
        cancellation: "Free cancellation",
        flexibility: "You can cancel later, so lock in this great price today",
        evaluation: "Excellent",
        rating: 9.4,
        price: "$150",
        gross: "Includes taxes and fees",
        availability: "See Availability"
    },
    {
        image: bedRoom1,
        title: "Tower Street Apartments",
        distance: "500m from center",
        taxi: "Free airport taxi",
        apartment: "Studio Apartment with Air conditioning",
        features: "Entire studio . 1 bathroom . 21m² 1 full bed",
        cancellation: "Free cancellation",
        flexibility: "You can cancel later, so lock in this great price today",
        evaluation: "Excellent",
        rating: 9.4,
        price: "$150",
        gross: "Includes taxes and fees",
        availability: "See Availability"
    },
    {
        image: bedRoom1,
        title: "Tower Street Apartments",
        distance: "500m from center",
        taxi: "Free airport taxi",
        apartment: "Studio Apartment with Air conditioning",
        features: "Entire studio . 1 bathroom . 21m² 1 full bed",
        cancellation: "Free cancellation",
        flexibility: "You can cancel later, so lock in this great price today",
        evaluation: "Excellent",
        rating: 9.4,
        price: "$150",
        gross: "Includes taxes and fees",
        availability: "See Availability"
    },
]