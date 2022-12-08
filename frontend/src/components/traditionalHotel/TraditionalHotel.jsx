import React from 'react';
import { TraditionalHotels } from '../../data/Data';
import "./TraditionalHotel.scss";

const TraditionalHotel = () => {
  return (
    <section className='traditional-hotels'>

      {
        TraditionalHotels.map(({ imgage, alt, title, name, price, rating, level  }) => {
          return(
            <article className='traditional-hotel'>
              <figure className='traditional-hotel-image'>
                <img src={imgage} alt={alt} />
              </figure>
              <div className='name-and-price'>
                <span className='traditional-hotel-title'> {title} </span>
                <span className='traditional-hotel-name'> {name} </span>
                <span className='traditional-hotel-price'> {price} </span>
              </div>
              <div className='traditional-hotel-rating'>
                <button> {rating} </button>
                <span> {level} </span>
              </div>
            </article>
          )
        })
      }

    </section>
  )
}

export default TraditionalHotel;