import React from 'react'
import logo from '../../assets/logo.jpg'
import seorch from '../../assets/seorch.png'
import cart from '../../assets/cart (2).png'
import chart from '../../assets/chart.png'
import user from '../../assets/free-icon-user-profile-4803050.png'
import heart from '../../assets/heart.png'
import { Link } from 'react-router-dom'
import Categoriya from '../../page/Categoriya/Categoriya'


const Navbar = () => {
  return (
    <div className='max-w-[1550px] '>
        <div className='w-[90%]  mx-auto '>
            <div className='w-[100%] h-[50px]  flex justify-between items-center border-b-[1px] border-gray-200'>
                <ul className='flex gap-[20px] text-gray-500'>
                    <li>
                        <Link to='/'>
                            О компании
                        </Link>
                    </li>
                    <li>Доставка</li>
                    <li>Оплата</li>
                    <li>Гарантии</li>
                    <li>Блог</li>
                </ul>
                <ul className='flex gap-[25px]  text-gray-500'>
                    <li>info@mail.ru</li>
                    <li>г. Москва, ул. Московская, д. 35</li>
                </ul>
            </div>
            <div className='w-[100%] h-[90px]  flex border-b-[1px] border-gray-200'>
                <div className='w-[15%] h-[100%]  flex items-center'><img src={logo} alt=""  className='w-[120px] h-[50px]'/></div>
                <div className='w-[42%] h-[100%]  flex items-center justify-center '>
                    <div className='w-[100%] h-[45px]  rounded-[20px] bg-[rgba(83,49,88,0.2)] flex justify-between  items-center text-[18px]'>
                        <div className='flex w-[95%] h-[95%] bg-white rounded-[20px]'>
                            <div className='w-[140px] h-[100%] rounded-[20px]  bg-gray-100 flex items-center ' >
                                <select name="" id="" className='w-[95%] h-[100%] rounded-[20px] outline-none text-[16px] flex items-center pl-[5px]  bg-gray-100'>
                                    <option value="Все категории">Все категори</option>
                                </select>
                            </div>
                            <input type="text" className='inp w-[70%] h-[100%]  pl-[10px] outline-none'  placeholder='Поиск'/>
                        </div>
                        <img src={seorch} alt=""  className='w-[20px] h-[20px] m-[20px] '/>
                    </div>
                </div>
                <div className='w-[43%] h-[100%]  flex justify-between'>
                    <div className='w-[150px] h-[100%]  flex justify-end items-center text-[14px] text-gray-400'>
                        <p className='pl-[10px]'>Пн-Пт с 09:00-19:00 
                        Сб-Вс - выходной</p>
                    </div>
                    <div className='w-[330px] h-[100%]  '>
                        <ul className='w-[100%] h-[100%] flex justify-between items-center'>
                            <li className='w-[70px] h-[70px] flex flex-col justify-center items-center text-[14px] text-gray-500'>
                                <Link className='flex flex-col justify-center items-center text-[14px] text-gray-500' to='/parol'>
                                    <img src={user} alt="" className='w-[30px]'/>
                                    <p>Войти</p>
                                </Link>
                            </li>
                            <li className='w-[70px] h-[70px]  flex flex-col justify-center items-center text-[14px]  text-gray-500'>
                                <img src={heart} alt="" className='w-[30px]'/>
                                <p>Избранное</p>
                            </li>
                            <li className='w-[70px] h-[70px] flex flex-col justify-center items-center text-[14px]  text-gray-500'>
                                <img src={chart} alt="" className='w-[30px]'/>
                                <p>Сравнить</p>
                            </li>
                            <li className='w-[70px] h-[70px]  flex flex-col justify-center items-center text-[14px]  text-gray-500'>
                                <img src={cart} alt="" className='w-[30px]'/>
                                <p>Корзина</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-[100%] h-[60px]  flex justify-between border-b-[1px] border-gray-200'>
                <ul className='h-[100%] flex gap-[20px] items-center'>
                    
                    <li>
                        <Link to='/category'>
                            Каталог
                        </Link>
                    </li>
                    
                    <li>Производители</li>
                    <li>Кабинеты под ключ</li>
                    <li>Услуги</li>
                    <li>Акции</li>
                    <li>Покупателям</li>
                    <li>Контакты</li>
                </ul>
                <ul className='h-[100%] flex gap-[25px] items-center'>
                    <li>Москва</li>
                    <li>
                        <button className='w-[160px] border-[1px] h-[40px] p-[8px] rounded-[15px]'>+7(495)000-00-00</button>
                    </li>
                    <li>
                        <button className='w-[180px] h-[40px] p-[8px] rounded-[15px] bg-green-700 text-white'>Заказать звонок</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar