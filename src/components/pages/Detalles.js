import React from 'react'
import { useParams } from 'react-router-dom'

const Detalles = () => {
  const dato=useParams()
  console.log(dato)
  console.log(dato.id)
  return (
    <div><h1>hola este es el dato {dato.id} </h1></div>
  )
}

export default Detalles