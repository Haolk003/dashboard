import './App.css';
import React , {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Header, ThemeSet, SideBar } from './component';
import { useStateContext } from './contexts/ContextProvider';
import { Ecommerce, Calendar, Customer, ColorPicker, Editor, Employee, Kanban, Order, Area, Bar, ColorMapping, Financial, Line, Pymaric, Stacker, Pie } from './pages';
const App =()=>{
 const {activeMenu,themeSetting,setThemeSetting,currentMode} =useStateContext()
return(
   <div className={currentMode === "dark" ? "dark" : ""}>
    <BrowserRouter>
    <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-5 bottom-5' style={{zIndex:'1000'}}>
         <TooltipComponent content="Settings" position="TopCenter">
            <button type="button" className='p-3 text-3xl bg-teal-800 rounded-full hover:bg-teal-500 duration-300' onClick={()=>{setThemeSetting(true)}}>
               <FiSettings className='text-white' />
                </button>
         </TooltipComponent>  
        </div>
        {activeMenu ? 
      <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'><SideBar /></div>  
      :
      <div className='w-0 dark:bg-secondary-dark-bg'><SideBar /></div>
      }  
      <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen  w-full ${activeMenu ? 'md:ml-72' : 'flex-1'} `} >
         <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'><Navbar /></div>
        
       
         <div className='dark:bg-main-dark-bg bg-main-bg '>

            {themeSetting && <ThemeSet />}
          <Routes>
           {/* dashboard */}
           <Route path="/ecommerce" element={<Ecommerce />} />
           <Route path="/" element={<Ecommerce />} />
           {/* page */}
           <Route path='/orders' element={<Order />} />
            <Route path='/employees' element={<Employee />} />
            <Route path='/customers' element={<Customer />} />
            {/* apps */}
            <Route path='/color-picker' element={<ColorPicker />}/>
            <Route path='/kanban' element={<Kanban />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/editor' element={<Editor />} />
            {/* charts */}
            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<ColorMapping />} />
            <Route path="/pimaric" element={<Pymaric />} />
            <Route path='/stacker' element={<Stacker />} />       
         </Routes>
          </div>
    </div>
      </div>
    </BrowserRouter>
   </div>
)
}
export default App;