import React from 'react'
import'./Home.css'
import Hero from '../../../assets/hero.png'
export const Home = () => {
  return (
    <div className='container-home' >
        {/* <h1>este es el home</h1> */}
        <div className='home-card'>
            <div  className='container-img-hero'>
                <img src={Hero} alt="" />
            </div>
            <div className='container-info-hero'>
                <div>
                    <h3>Nombre Apellido</h3>
                </div>
                <div>
                    otra cosa que no se que mierda iria 
                </div>
            </div>
        </div>
    </div>
  )
}
