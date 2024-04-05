import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './page/Главная/Home'
import Categoriya from './page/Categoriya/Categoriya'
import Navbar from './components/Navbar/Navbar'
import Parol from './page/Login/Parol'








function App() {


  return (
    <>

        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/category' element={<Categoriya/>}/>
          <Route path='/parol' element={<Parol/>}/>
        </Routes>

    </>
  ) 
}

export default App
