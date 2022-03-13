import React from 'react'

const Cardprincipal = (props) => {
  return (
    <div className='Card'>
      <picture className='Character-image'> <img src={props.image} alt="{props.name}"/> </picture>
      <h3 className='Name font-bask'> {props.name} </h3>
      <span className='price'>{props.price}</span>
    
    </div>
  )
}

export default Cardprincipal