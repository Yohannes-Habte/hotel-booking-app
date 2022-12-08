import React from 'react';
import { FooterLists } from '../../data/Data';
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer-lists'>
          {
            FooterLists.map(({country, region, city, district, airport, hotel}, index) => {
              return (
                <ul key={index} className='footer-unodered-lists'>
                  <li> {country} </li>
                  <li> {region} </li>
                  <li> {city} </li>
                  <li> {district} </li>
                  <li> {airport} </li>
                  <li> {hotel} </li>
                </ul>
              )
            })
          }
      </section>
      <div className='footer-copyright'>
        <p>Copyright @ 2022</p>
        <p>LisaConsult Hotel Booking </p>
      </div>
    </footer>
  )
}

export default Footer;