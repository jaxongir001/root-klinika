import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // carousel stili

const MultiCarousel = () => {
  // Carousel uchun xususiyatlar
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

  return (
    <div>

      <div className='mt-[100px] pb-[100px]'>
        <h2 className='font-semibold text-[34px] pb-[25px]'>Комплексное оснащение кабинетов
      </h2>
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

            <div>
                <img src="https://global-mt.ru/local/templates/gmt/img/complex3.png" alt="slide 3" className='w-[430px] h-[340px]'/>
                <p>Operatsia Bloki</p>

            </div>
            <div>
                <img src="https://global-mt.ru/local/templates/gmt/img/complex1.png" alt="slide 1" className='w-[430px] h-[340px]' />
                <p>Operatsi</p>
            </div>
            <div>
                <img src="https://global-mt.ru/local/templates/gmt/img/complex2.png" alt="slide 2" className='w-[430px] h-[340px]'/>
                <p>RentGen</p>
            </div>
            <div>
                <img src="https://global-mt.ru/local/templates/gmt/img/complex3.png" alt="slide 3" className='w-[430px] h-[340px]'/>
                <p>Lazer</p>
            </div>
            <div>
                <img src="https://global-mt.ru/upload/iblock/107/prm7chi8jbly1wev6r2f3vs9pzf2x2kq/blog1.jpg" alt="slide 3" className='w-[430px] h-[340px]'/>
                <p>A,aliy Operatsia</p>
            </div>
            <div>
                <img src="https://global-mt.ru/local/templates/gmt/img/complex1.png" alt="slide 3" className='w-[430px] h-[340px]'/>
                <p>Lazerni Block</p>
            </div>
          

       
        </Carousel>
       </div>
       <div className='flex gap-2 absolute left-[67%] top-[155%]'>
            <button className='p-[10px] border-[1px] rounded-[15px] text-green-700 '>Бесплатная консультация</button>
            <button className='p-[10px] border-[1px] rounded-[15px] bg-green-800 text-white font-semibold' >Рассчитать стоимость</button>
           </div>
      </div>
  );
};

export default MultiCarousel;
