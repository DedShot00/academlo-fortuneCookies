import React from 'react'
import Button from './Button'
import './styles/InfoContainer.css'
const InfoContainer = ({quote, handleChangeQuote}) => {


  
  

  return (
    <section className='containerInfo'>
      <h1 className='containerInfo__title'>Fortune Cookies</h1>
      <Button handleChangeQuote={handleChangeQuote} />
      <article className='containerInfo__phrase'>
        <p>{quote.phrase}</p>
      </article>
      <article className='containerInfo__author'>
        <h4>Author: {quote.author}</h4>
      </article>
    </section>

  )
}

export default InfoContainer