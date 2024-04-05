import React from 'react'
import Katalog from '../../components/Cartegory/Katalog'
import Carts from '../../components/Carts/Carts'
import MultiCarousel from '../../components/Carousel/MultiCarousel'
import Buys from '../../components/Buy/Buy'
import Brend from '../../components/Brend/Brend'
import Informatsia from '../../components/Informatsia/Informatsia'
import Location from '../../components/Location/Location'
import Footer from '../../components/Footer/Footer'


const Categoriya = () => {
  return (
   <>
    <Katalog/>
    <div className='w-[1360px] mx-auto'>
      <MultiCarousel/>
    </div>
    <Buys/>
    <Brend/>
    <Informatsia/>
    <div className='w-[1360px] mx-auto'>
    <Location/>
    </div>
    <Footer/>
   </> 
  )
}

export default Categoriya