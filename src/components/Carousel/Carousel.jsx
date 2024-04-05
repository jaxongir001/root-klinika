import React, { useState, useEffect } from "react";
import left from '../../assets/arrow.png'
import right from '../../assets/right-arrow.png'

// import './Carousel.css';
function Carousel() {
  const [currentPage, setCurrentPage] = useState(0);

  // Sahifalarni almashish
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) =>
        prevPage === images.length - 1 ? 0 : prevPage + 1
      );
    }, 4000); // Har 3 sekundda bir sahifalar almashib turadi

    return () => clearInterval(interval); // O'chirib tashlash
  }, []); // useEffect faqat bir marta ishlaydi

  const nextSlide = () => {
    setCurrentPage((prevPage) =>
      prevPage === images.length - 1 ? 0 : prevPage + 1
    );
  };

  const prevSlide = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? images.length - 1 : prevPage - 1
    );
  };

  // Rasmlar manzillari
  const images = [
    "https://global-mt.ru/upload/iblock/cbb/hhdk76kzcpvoue5vzt8fslriolbzzn69/gms_5.jpg",
    "https://global-mt.ru/upload/iblock/6d3/moyd8c8zlm7a1w8ymyq5l6j5kgyelvx1/gms6.jpg",
    "https://global-mt.ru/upload/iblock/7b6/z77e9ugchmajuuqzwp7nqofw1hjwi6bp/gms_4.jpg",
    "https://global-mt.ru/upload/iblock/b70/x819klto825rqfppl6lit3xnn2jcbib6/gmt_na_glavnuyu_.jpg",

  ];

  return (
    <div className="carousel" style={{ width: "1380px", height: "400px"}}>
      <img className="carusel_images"
        src={images[currentPage]}
        alt={`Page ${currentPage + 1}`}
        style={{ width: "100%", height: "100%",  borderRadius:"20px"}}
      />
    
      <div className="absolute left-[85%] top-[65%] flex gap-3">
      <button className="bt prev  w-[40px] h-[40px] bg-white rounded-[50%] font-semibold flex justify-center items-center" onClick={prevSlide}>
        <img src={left} alt="" className="w-[20px]" />
      </button>
      <button className="bt next w-[40px] h-[40px] bg-white rounded-[50%] font-semibold  flex justify-center items-center" onClick={nextSlide}>
        <img src={right} alt="" className="w-[20px]"/>
      </button>
      </div>
    </div>
  );
}

export default Carousel;