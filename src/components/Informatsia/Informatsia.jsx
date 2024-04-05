import React from "react";

const Informatsia = () => {
  return (
    <>
      <div className="max-w-[1550px]  bg-[#088269] mt-[90px]">
        <div className="w-[90%]  m-auto flex justify-between">
          <p className="text-[30px] text-[white] mt-[25px]">
            Информация о компании
          </p>
          <div className="w-[680px] ">
            <hr className="w-full" />
            <div className="flex justify-between align-center mt-[25px] mb-[20px]">
              <p className="text-white text-[18px]">О компании</p>
              <button className=" bg-white rounded-[50px] w-[32px] h-[32px] border border-white text-[20px] text-[center] ">
                x
              </button>
            </div>
            <p className="w-[560px] text-white text-[16px] mb-[40px]">
              Но синтетическое тестирование, в своём классическом представлении,
              допускает внедрение поэтапного и последовательного развития
              общества. В рамках спецификации современных стандартов, сторонники
              тоталитаризма в науке будут функционально разнесены.
            </p>
            <p className="text-white text-[16px] mb-[22px]">Подробнее/</p>
            <hr className="w-full mb-[22px]" />
            <div className="flex justify-between align-center mt-[25px] mb-[20px]">
              <p className="text-white text-[18px]">Преимущества сотрудников</p>
              <button className=" bg-[#088269] rounded-[50px] w-[32px] h-[32px] text-white border border-white text-[22px]  pb-[5px] flex items-center justify-center ">
                +
              </button>
            </div>
            <hr className="w-full mb-[22px]" />
            <div className="flex justify-between align-center mt-[25px] mb-[20px]">
              <p className="text-white text-[18px]">Достижения компании</p>
              <button className=" bg-[#088269] rounded-[50px] w-[32px] h-[32px] text-white border border-white flex items-center justify-center pb-[5px]">
                +
              </button>
            </div>
            <hr className="w-full mb-[22px]" />
            <div className="flex justify-between align-center mt-[25px] mb-[125px]">
              <p className="text-white text-[18px]">Карьерный рост</p>
              <button className=" bg-[#088269] rounded-[50px] w-[32px] h-[32px] text-white border border-white text-[22px]  pb-[5px]">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Informatsia;
