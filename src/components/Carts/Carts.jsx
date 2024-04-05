import React from "react";

const Carts = () => {
  return (
    <>
      <div className="max-w-[1550px] h-[400px] mb-[150px] mt-[50px]">
        <div className="w-[100%] m-auto ">
          <h1 className="text-[30px] mb-[40px]">Почему выбирают нас?</h1>
          <div className="w-full  flex justify-between">
            <div className="w-[320px] h-[350px] border border-gray-400 rounded-[10px] flex flex-col items-center justify-center gap-[20px]">
              <img
                className=""
                src="https://global-mt.ru/local/templates/gmt/img/Symbol.svg"
                alt="rasm"
              />
              <p className="text-[18px] w-[150px] text-center">
                Быстрая доставка
              </p>
            </div>
            <div className="w-[320px] h-[350px] border border-gray-400  rounded-[10px] flex flex-col items-center justify-center gap-[20px]">
              <img
                className=""
                src="https://global-mt.ru/local/templates/gmt/img/Symbol(1).svg"
                alt="rasm"
              />
              <p className="text-[18px] w-[150px] text-center">
                Весь товар сертифицирован
              </p>
            </div>
            <div className="w-[320px] h-[350px] border border-gray-400  rounded-[10px] flex flex-col items-center justify-center gap-[20px]">
              <img
                className=""
                src="https://global-mt.ru/local/templates/gmt/img/Symbol(2).svg"
                alt="rasm"
              />
              <p className="text-[18px] w-[150px] text-center">
                Гибкая система скидок
              </p>
            </div>
            <div className="w-[320px] h-[350px] border border-gray-400 rounded-[10px] flex flex-col items-center justify-center gap-[20px]">
              <img
                className=""
                src="https://global-mt.ru/local/templates/gmt/img/Symbol(3).svg"
                alt="rasm"
              />
              <p className="text-[18px] w-[150px] text-center">Лет на рынке</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;