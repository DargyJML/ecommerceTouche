import React from 'react'
import redessociales from  '../../assets/zredessociales.png'

const Footer = () => {
  return (
    <footer className=' relative bottom-0 w-full h-50 bg-rose-100 text-gray-900 flex flex-row justify-center '> 
    <div className='flex justify-center '>
    <img src={redessociales} alt="logo" className='w-2/3 justify-content: center '/>
    </div>
    </footer>
  )
}

export default Footer


