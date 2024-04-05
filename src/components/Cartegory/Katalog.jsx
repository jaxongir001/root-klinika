import React from "react";
import img from "../../assets/heart.png";
import database from "./db/data.json";


const Katalog = () => {
  const { data } = database;
  return (
    <>
      <div className="w-[1510px] mt-[50px] ">
        <div className="w-[90%]  m-auto flex justify-between">
          <div className="w-[300px] rounded-[10px] pl-[20px] pr-[20px] pt-[15px]">
            <h1 className="text-[16px] text-[#202020] mb-[15px]">
              Направления
            </h1>
            <hr className="w-full m-auto mb-[20px]" />
            <div className="flex align-center justify-between  mb-[12px]">
              <p className="text-[14px]">Реанимация</p>
              <img
                className="w-[10px] h-[10px] mt-[7px]   "
                src={img}
                alt="rasm"
              />
            </div>
            <div className="flex align-center justify-between  mb-[12px]">
              <p className="text-[14px]">Хирургия</p>
              <img
                className="w-[10px] h-[10px] mt-[7px]   "
                src={img}
                alt="rasm"
              />
            </div>
            <div className="flex align-center justify-between  mb-[12px]">
              <p className="text-[14px]">Офтальмология</p>
              <img
                className="w-[10px] h-[10px] mt-[7px]   "
                src={img}
                alt="rasm"
              />
            </div>
            <div className="flex align-center justify-between  mb-[12px]">
              <p className="text-[14px]">Лабораторная диагностика</p>
              <img
                className="w-[10px] h-[10px] mt-[7px]   "
                src={img}
                alt="rasm"
              />
            </div>
            <div className="flex align-center justify-between  mb-[12px]">
              <p className="text-[14px]">Акушерство и Гинекология</p>
              <img
                className="w-[10px] h-[10px] mt-[7px]   "
                src={img}
                alt="rasm"
              />
            </div>
            <div className="flex align-center justify-between  mb-[12px]">
              <p className="text-[14px]">Гистология</p>
              <img
                className="w-[10px] h-[10px] mt-[7px]   "
                src={img}
                alt="rasm"
              />
            </div>
            <div className="flex align-center justify-between  mb-[12px]">
              <p className="text-[14px]">Косметология</p>
              <img
                className="w-[10px] h-[10px] mt-[7px]   "
                src={img}
                alt="rasm"
              />
            </div>
            <div className="flex align-center justify-between  mb-[12px]">
              <p className="text-[14px]">Оториноларингология</p>
              <img
                className="w-[10px] h-[10px] mt-[7px]   "
                src={img}
                alt="rasm"
              />
            </div>
            <div className="flex align-center justify-between  mb-[12px]">
              <p className="text-[14px]">Рентгенология и томография</p>
              <img
                className="w-[10px] h-[10px] mt-[7px]   "
                src={img}
                alt="rasm"
              />
            </div>
            <div className="flex align-center justify-between  mb-[12px]">
              <p className="text-[14px]">Стерилизация</p>
              <img
                className="w-[10px] h-[10px] mt-[7px]   "
                src={img}
                alt="rasm"
              />
            </div>
            <div className="flex align-center justify-between  mb-[12px]">
              <p className="text-[14px]">Физиотерапия и реабилитация</p>
              <img
                className="w-[10px] h-[10px] mt-[7px]   "
                src={img}
                alt="rasm"
              />
            </div>
            <div className="flex align-center justify-between  mb-[12px]">
              <p className="text-[14px]">Функциональная диагностика</p>
              <img
                className="w-[10px] h-[10px] mt-[7px]   "
                src={img}
                alt="rasm"
              />
            </div>
            <div className="flex align-center justify-between  mb-[12px]">
              <p className="text-[14px]">Эндоскопия</p>
              <img
                className="w-[10px] h-[10px] mt-[7px]   "
                src={img}
                alt="rasm"
              />
            </div>
            <div className="flex align-center justify-between  mb-[12px]">
              <p className="text-[14px]">Новинки</p>
              <img
                className="w-[10px] h-[10px] mt-[7px]   "
                src={img}
                alt="rasm"
              />
            </div>
            <div className="flex align-center justify-between  mb-[12px]">
              <p className="text-[14px]">Распродажи</p>
              <img
                className="w-[10px] h-[10px] mt-[7px]   "
                src={img}
                alt="rasm"
              />
            </div>
            <div className="flex align-center justify-between  mb-[12px]">
              <p className="text-[14px]">Кабинеты под ключ</p>
              <img
                className="w-[10px] h-[10px] mt-[7px]   "
                src={img}
                alt="rasm"
              />
            </div>
          </div>
          <div className=" w-[1050px]  flex flex-wrap justify-between">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-[340px] h-[280px] border border-gray-400 rounded-[15px] mb-[15px] "
              >
                <img
                  className="w-full h-[70%]  rounded-tr-[15px] rounded-tl-[15px]"
                  src={item.image}
                  alt="rasm"
                />
                <p className="ml-[25px] mt-[25px] text-[18px]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Katalog;
