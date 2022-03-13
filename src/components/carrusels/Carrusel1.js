import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css'

function Carrusel1() {
  return (
  
  <Slider autoplay={3000}>

	<img src="zprincipal1.jpg" />
	<img src="zprincipal2.jpg" />
	<img src="zprincipal3.jpg" />

  </Slider> 
  
  );


}



export default Carrusel1