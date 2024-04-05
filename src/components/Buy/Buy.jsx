import React, { useState } from "react";
import "./Cards.css";
import data1 from "./data.json";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'

import likeImage from "./img/heart.png";
import unlikeImage from "./img/love.png";
import basketimage from "./img/shopping-basket.png";
// import styled from "@emotion/styled";


const Buys = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3, // Har bir o'tishda necha slayd o'tkazish
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      };



    const [count, setCount] = useState(0)

    function increase() {
        setCount(count + 1)
    }

  const { data } = data1;
  // console.log(data);

  const [liked, setLiked] = useState(Array(data.length).fill(false));

  const handleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  return (
    <>
    {/* <span className='absolute w-[20px] h-[20px] p-2 bg-red-500 rounded-[50%] flex items-center justify-center text-white text-[14px] top-[18.5%] left-[88.8%]' >{count}</span> */}
    <div className="cards_wrapper w-[1400px] h-[500px] flex justify-center mx-auto items-center">
      <div className="w-[20%] h-[100%] ">
        <ul>
            <li>
                <h2 className="text-[30px] font-semibold pb-[30px]" >Каталог товаров</h2>
            </li>
            <li className="text-gray-400">Хиты продаж</li>
            <li className="text-gray-400">Новинки</li>
            <li className="text-gray-400">Акции</li>
        </ul>
      </div>
      <div className="flex w-[80%] h-[100%]  justify-between items-center">
            <Carousel className='w-[1370px] mx-auto '
      swipeable={true} // Slaydlarni sug'urishni yoqish
      draggable={false} // Slaydlarni surib ko'chirishni yoqish
      showDots={true} // Tekshiruv nuqtalari chiqarishni yoqish
      responsive={responsive} // To'g'ri javob berish
      infinite={true} // Doimiy qaytaqayta aylantirish
      autoPlay={true} // Avtomatik o'ynatishni yoqish
      autoPlaySpeed={3000} // Avtomatik o'ynatish tezligi
      keyBoardControl={true} // Klaviaturani boshqarishni yoqish
      customTransition="all .5" // O'tish o'chirilgan vaqt o'chirilganida
      transitionDuration={4000} // O'tish o'chirilgan vaqt
      containerClass="carousel-container" // Carousel konteyneriga klass qo'shish
      removeArrowOnDeviceType={['tablet', 'mobile']} // Navigatsiyani o'chirish
      // deviceType={props.deviceType} // Qurilmaning turi
      dotListClass="custom-dot-list-style" // Nuqta ro'yxatiga klass qo'shish
      itemClass="carousel-item-padding-40-px" // Har bir slaydga klass qo'shish
      >     

    {data.map((product, index) => (
        <div className="card  w-[340px] h-[450px]  rounded-[10px] mx-auto" key={index} >
          <div className="w-[100%] h-[50%] flex items-center  bg-white rounded-[10px]">
                <img className="card_img h-[100%] w-[100%] rounded-[10px]" src={product.image} alt="rasm"/>
          </div>
                <div className="w-[95%] mx-auto">
                <p className="font-semibold text-[22px] w-[250px]" >
                    {product.sos}
                </p>
                 <p className="card_name">{product.name}</p>
                <p className="card_price">
                    <span>$</span>
                    {product.price}
                </p>
             
                <p className="card_sale">
                    <span>$</span>
                    {product.sale}
                </p>
                <button className="w-[100%] h-[40px] rounded-[8px] border-[1px] border-green-800 mt-[30px]" >
                    {product.click}
                </button>
                </div>
          <button className="like_button bg-red-500" onClick={() => handleLike(index)}>
            <img src={liked[index] ? unlikeImage : likeImage} alt="like-icon" className="w-[20px] absolute top-[3%] left-[85%]" />
          </button>
          <button className="savat_button"> 
            {/* <img src={basketimage} alt="savat_icon" className="w-[20px]"  onClick={increase}/>/ */}
            
          </button>
        </div>
      ))}
          

       
        </Carousel>
      
      </div>
    </div>
    </>
  );
};

export default Buys;