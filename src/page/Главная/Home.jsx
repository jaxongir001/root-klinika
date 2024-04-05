import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import MultiCarousel from '../../components/Carousel/MultiCarousel'
import Carts from '../../components/Carts/Carts'

import Buys from '../../components/Buy/Buy'
import Client from '../../components/Client/Client'
import Brend from '../../components/Brend/Brend'
import Location from '../../components/Location/Location'
import Pochta from '../../components/Pochta/Pochta'
import Informatsia from '../../components/Informatsia/Informatsia'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'



const Home = () => {
  return (
    <div className='max-w-[1550px]  mt-[30px]'>
        <div className='w-[90%] h-[400px]  mx-auto'>
            <Carousel/>
            <MultiCarousel/>
            <Carts/>
            <Buys/>
            <Client/>
            <Brend/>
            <Informatsia/>
            <Location/>
            <Pochta/>
            <Footer/>
            </div>
        
    </div>
  )
}

export default Home;