
import { NavLink } from 'react-router-dom'
const Productitem = ({data, addToCart}) => {
    let {id, name, image, price} = data;
  return (
    <div className="text-black" style={{border:"thin solid gray", padding:"1rem"}}>
      <NavLink to={`/detalles/${id}`}><img src={image}/></NavLink> 
        Producto
        <h4>{name}</h4>
        <h5>${price}COP</h5>
        <button onClick={() =>addToCart(id)} className="border-2 border-black px-2 bg-gray-300 hover:bg-gray-400 rounded"> Agregar </button>
        
    </div>
  )
}

export default Productitem 



/* 
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom'


const [Category, setCategory] = useState ();
const {categoria}=useParams()

useEffect(() => {
  setCategory(categoria)

}, [categoria])

const Productitem = ({data, addToCart, item}) => {
    let {id, name, image, price} = data;
    if (item.categoria==Category){

  
  return (
    <div className="text-black" style={{border:"thin solid gray", padding:"1rem"}}>
      <NavLink to={`/detalles/${id}`}><img src={image}/></NavLink> 
        Producto
        <h4>{name}</h4>
        <h5>${price}COP</h5>
        <button onClick={() =>addToCart(id)} className="border-2 border-black px-2 bg-gray-300 hover:bg-gray-400 rounded"> Agregar </button>
        <NavLink to={"para bordar"}>
          <p>Para bordar</p>
        </NavLink>
    </div>
  )}
}

export default Productitem;

 */
