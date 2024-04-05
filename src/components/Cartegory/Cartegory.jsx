import React from 'react'

const Cartegory = () => {
    return (
        <>
          <div className="max-w-[1550px] mt-[20px]">
            <div className=" w-[100%]  mx-auto  ">
              <div className="flex  justify-between mb-[40px]">
                <p className="  text-[30px] font-semibold">Популярные категории</p>
                <button className="w-[160px] h-[40px] rounded-[50px]  text-[white]   bg-[#088269] hover:cursor-pointer font-semibold">
                  Все категории
                </button>
              </div>
    
              <div className="flex justify-between ">
                <div className="flex gap-[18px]">
                  <div className=" ">
                    <div className="bts w-[320px] h-[304px] mb-[10px] bg-[#F8F7F3] rounded-[10px] round font-semibold">
                      <img
                        className="w-full h-[80%] btr"
                        src="https://global-mt.ru/upload/iblock/c6e/0pordpcsv1m0eejjpk0uie7ftwusdl2k.jpg"
                        alt="rasm"
                      />
                      <p className="text-[22px] ml-[20px]  mt-[10px]">Урология</p>
                    </div>
                    <div className="bts w-[320px] h-[304px] bg-[#F8F7F3] rounded-[1px] round font-semibold">
                      <img
                        className="w-full h-[80%] btr "
                        src="https://global-mt.ru/upload/iblock/343/thhoixipw9z1qmr1d532z5xs0r698m68.jpg"
                        alt="rasm"
                      />
                      <p className="text-[22px] ml-[20px]  mt-[10px]">
                        Операционные столы
                      </p>
                    </div>
                  </div>
                  <div className="bts w-[340px] h-[620px]  bg-[#F8F7F3] rounded-[10px] round font-semibold">
                    <img
                      className="w-full h-[90%] btr"
                      src="https://global-mt.ru/upload/iblock/8a0/7xi0t1s68lzie3zhvjh21zpe1d5f2yrs.jpg"
                      alt="rasm"
                    />
                    <p className="text-[22px] ml-[20px]  mt-[20px]">
                      Для радиационной терапии
                    </p>
                  </div>
                </div>
                <div className="flex gap-[18px]">
                  <div className="">
                    <div className="bts w-[320px] h-[304px] mb-[10px] bg-[#F8F7F3] rounded-[10px] round font-semibold">
                      <img
                        className="w-full h-[80%] btr"
                        src="https://global-mt.ru/upload/iblock/994/up35t6hkl0i48yv6vzobk5q776fmkfo3.png"
                        alt="rasm"
                      />
                      <p className="text-[22px] ml-[20px]  mt-[10px]">
                        ЛОР оборудование
                      </p>
                    </div>
                    <div className="bts w-[320px] h-[304px] bg-[#F8F7F3] rounded-[10px] round font-semibold">
                      <img
                        className="w-full h-[80%] btr"
                        src="https://global-mt.ru/upload/iblock/f4f/x5ak53u35c2xyod0djun1lznt9ihcccs.jpg"
                        alt="rasm"
                      />
                      <p className="text-[22px] ml-[20px]  mt-[10px]">
                        Ультразвуковая диагностика
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="bts w-[340px] h-[304px] mb-[10px] bg-[#F8F7F3] rounded-[10px] round font-semibold">
                      <img
                        className="w-full h-[80%] btr"
                        src="https://global-mt.ru/upload/iblock/b39/0o4wfxmcinlhszb86sgnuymbxesi3w7g.jpg"
                        alt="rasm"
                      />
                      <p className="text-[22px] ml-[20px]  mt-[10px]">
                        Лучевая Диагностика
                      </p>
                    </div>
                    <div className="bts w-[340px] h-[304px] bg-[#F8F7F3] rounded-[10px] font-semibold ">
                      <img
                        className="w-full h-[80%] btr"
                        src="https://global-mt.ru/upload/iblock/a5a/y4a7xoykn1nr0619l5vyw91gdd7t8rcm.jpg"
                        alt="rasm"/>
                        <p className="text-[22px] ml-[20px]  mt-[10px]">Эндоскопия</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
}

export default Cartegory;