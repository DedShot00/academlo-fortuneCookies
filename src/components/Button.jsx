import React from 'react'

const Button = ({handleChangeQuote}) => {
  return (
    <button className='button' onClick={handleChangeQuote}>Try My luck</button>
  )
}

export default Button