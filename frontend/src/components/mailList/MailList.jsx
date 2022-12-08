import React from 'react';
import "./MailList.scss";

const MailList = () => {
  return (
    <section className='mail-lists'>
      <h1 className='mail-list-title'> Save time and money with LisaConsult Hotels </h1>
      <span className='mail-list-signup'> Sign up and we will send the best deals to you </span>
      <form action="" className='mail-list-form'>
        <input className='mail-input' type="text" name="" placeholder='Enter Your Email' />
        <button className='mail-button'>Subscribe</button>
      </form>
    </section>
  )
}

export default MailList;