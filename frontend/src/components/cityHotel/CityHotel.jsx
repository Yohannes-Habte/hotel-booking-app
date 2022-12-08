import React from 'react';
import { HotelByCity } from '../../data/Data';
import "./CityHotel.scss"

const CityHotel = () => {
  return (
    <section className='city-based-hotels'>
      {
        HotelByCity.map(({image, alt, title, number}) => {
          return (
            <article className='feactured-items'>
              <figure className='hotel-image'>
                <img src={image} alt={alt} />
              </figure>
              <h1 className='feturedtitle'> {title} </h1>
              <h3 className='featuredNumber'> {number} </h3>
            </article>
          )
        })
      }
    </section>
  )
}

export default CityHotel;