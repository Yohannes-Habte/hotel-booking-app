import React from 'react';
import "./SearchItem.scss";
import { SearchItems } from '../../data/Data';

const SearchItem = () => {
  return (
    <section>
    {
      SearchItems.map(({image, title, distance, taxi, apartment, features, cancellation, flexibility, evaluation, rating, price, gross, availability }, index) => {
        return(
          <article key={index} className="search-item-container" >
            <figure className='search-item-image'>
              <img src={image} alt="" />
            </figure>

            <div className='search-item-description'>
              <h1 className='search-item-title'> {title} </h1>
              <span className='search-item-distance'> {distance} </span>
              <span className='search-item-taxi'> {taxi} </span>
              <span className='search-item-apartment'> {apartment} </span>
              <span className='search-item-features'> {features} </span>
              <span className='search-item-cancel'> {cancellation} </span>
              <span className='search-item-flexibility'> {flexibility} </span>
          </div>

          <div className='search-details-container'>
            <div className='search-item-details'>
              <span className='search-item-evaluation'> {evaluation} </span>
              <span className='search-item-rating'> {rating} </span>
            </div>

            <div className='price-btn-container'>
              <span className='search-item-price'> {price} </span>
              <span className='search-item-gross'> {gross} </span>
              <button className='search-item-btn'> {availability} </button>
            </div>
        </div>
          </article>
        )
      })
    }
    </section>
  )
}

export default SearchItem;