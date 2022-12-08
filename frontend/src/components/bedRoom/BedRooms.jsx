import React from 'react'
import { bedRooms } from '../../data/Data';
import "./BedRooms.scss"

const BedRooms = () => {
  return (
    <section className='bedRooms-container'>
      {
        bedRooms.map(({image, alt, title, number}) => {
          return (
            <article className='bedRooms'>
              <figure className='bedRoom-image'>
                <img src={image} alt={alt} />
                <h1 className='bedRoom-title'> {title} </h1>
                <h3 className='bedRoom-number'> {number} </h3>
              </figure>
            </article>
          )
        })
      }
    </section>
  )
}

export default BedRooms;