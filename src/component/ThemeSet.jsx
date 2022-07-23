import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
const ThemeSet = () => {
  const {SetMode,SetColor,currentColor,currentMode,setThemeSetting,themeSetting} =useStateContext();
  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0 '>
    
      <div className='float-right h-screen  dark:text-gray-200 bg-white dark:[#484b52]  '>
        <div className='flex items-center justify-between p-4 ml-4'>
        <p className='font-semibold text-lg'>Settings </p>
        <button type='button' onClick={()=>{setThemeSetting(false)}} style={{color:'rgb(153,171,180)',borderRadius:"50%" }} className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray">
          <MdOutlineCancel />
        </button>
       </div>
       <div className='flex-col border-t-1 border-color p-4 ml-4'>
        <p className='font-semibold'>Theme Option</p>
        <div className='mt-4'>
        <input type="radio" id="light" name="theme" value="light" className="cursor-poiter" onChange={(e)=>{SetMode(e.target.value)}} checked={currentMode === "light" && true}/>
        <label htmlFor="light" className="ml-2 text-md cursor-pointer">Light</label>
        <br />
        <input type="radio" id="dark" name="theme" value="dark" className="cursor-poiter" onChange={(e)=>{SetMode(e.target.value)}} checked={currentMode ==='dark' && true}/>
        <label htmlFor="dark" className="ml-2 text-md cursor-pointer">Dark</label>
        </div>
       </div> 
       <div className='flex-col border-t-1 border-color p-4 ml-4'>
        <p className='font-semibold'>Theme Option</p>
        <div className='flex gap-4'>
          {themeColors.map((item,index)=>{
            return(
              <TooltipComponent key={index} content={item.name} position="TopCenter">
                <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                  <button className={`h-10 w-10 rounded-full cursor-pointer`} style={{backgroundColor:item.color}} onClick={()=>SetColor(item.color)}>
                    <BsCheck className={`ml-2 text-2xl text-white ${currentColor === item.color ? 'block' : 'hidden'}`}/>
                  </button>
                </div>
                </TooltipComponent>
            )
          })}
        </div>
        </div>
      </div>
    
    </div>
  )
}

export default ThemeSet