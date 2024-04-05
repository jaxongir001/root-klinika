import React from 'react'

const Client = () => {
  return (
    <div className='w-[100%] h-[500px] mt-[50px]  bg-[#E5E4ED]'>
        <div className='w-[100%] h-[100%]  '>
            <div className='w-[90%] h-[40%]  ] mx-auto flex justify-between items-center gap-[115px]'>
                <h3 className='font-semibold text-[24px]'>Наши клиенты</h3>
                <h1 className='text-[40px] w-[440px] font-semibold'>БОЛЕЕ <span className='text-green-600'>5000 <br /> </span>УСПЕШНЫХ ПРОЕКТОВ</h1>
            </div>
            <div className='w-[100%] h-[60%] '>
                
                    <ul className='flex justify-between items-center gap-[10px] w-[100%] h-[100%]'>
                        <li className='w-[320px] h-[250px] '>
                            <div className='w-[100%] h-[70%] bg-white flex items-center justify-center rut'>
                                <img src="https://global-mt.ru/upload/iblock/42a/5v2wg01of3rez9u1ee3q7w6dub963ljz/slider7.png" alt="" />
                            </div>
                            <div className='w-[100%] h-[30%] bg-[#F8F7F3]'>
                                <p className='font-semibold w-[300px] mx-auto pt-[5px]'>НМИЦ онкологии им. Н.Н. Блохина</p>
                            </div>
                        </li>
                        <li className='w-[320px] h-[250px] \'>
                        <div className='w-[100%] h-[70%] bg-white  flex items-center justify-center rut'>
                            <img src="https://global-mt.ru/upload/iblock/55f/2ucwemhgjoqvi0xwad53u322awn6kydz/11.png" alt="" />
                        </div>
                            <div className='w-[100%] h-[30%] bg-[#F8F7F3]'>
                            <p className='font-semibold w-[300px] mx-auto pt-[5px]'>НМИЦ онкологии им. Н.Н. Блохина</p>
                            </div>
                        </li>
                        <li className='w-[320px] h-[250px]'>
                        <div className='w-[100%] h-[70%] bg-white flex items-center justify-center rut'>
                            <img src="https://global-mt.ru/upload/iblock/a98/asyu7avffyglsba9gj33sbzw0l1fes5r.png" alt="" />
                        </div>
                            <div className='w-[100%] h-[30%] bg-[#F8F7F3]'>
                            <p className='font-semibold w-[300px] mx-auto pt-[5px]'>НМИЦ онкологии им. Н.Н. Блохина</p>
                            </div>
                        </li>
                        <li className='w-[320px] h-[250px] '>
                        <div className='w-[100%] h-[70%] bg-white flex items-center justify-center rut'>
                            <img src="https://global-mt.ru/upload/iblock/a04/tnrrj9eg674c2lr979rqtldsuk0hojzx/slider5.png" alt="" />
                        </div>
                            <div className='w-[100%] h-[30%] bg-[#F8F7F3]'>
                            <p className='font-semibold w-[300px] mx-auto pt-[5px]'>НМИЦ онкологии им. Н.Н. Блохина</p>
                            </div>
                        </li>
                        
                    </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Client