import React from 'react'
import Cardprincipal from './Cardprincipal'


export const Cardsprincipal = (props) => {
  const productos = [

    {
        name: "kit de bordado",
        price: "150.000",
        image: "zkitdebordado.jpg"
      },
      {
        name: "Kit de RAINBOW",
        price: "150.000",
        image: "zkitderainbow.jpg"
      },
      {
        name: "portabastidor",
        price: "150.000",
        image: "zportabastidor.jpg"
       },
        
    ]
  
    return (
    <div className='Cards'> 
    {
    productos.map(producto => (
    <Cardprincipal name={producto.name} price={producto.price} image={producto.image} />
    ))
    }
    </div>   
  )
}
export default Cardsprincipal