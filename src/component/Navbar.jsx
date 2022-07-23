import React, { useEffect } from 'react'
import {Cart,Notification,Chat,UseProfile} from '.'
import {GiHamburgerMenu} from 'react-icons/gi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai';
import {BsFillChatLeftFill} from 'react-icons/bs';
import {RiNotification3Line,RiArrowDropDownLine} from 'react-icons/ri';

import Avatar from '../data/avatar.jpg';
const NavButton=({title,color,requestFunc,dotColor,icon})=>{
  
return(


  <TooltipComponent content={title} position="BottomCenter">
    <button type='button' onClick={()=> requestFunc()} style={{color:color}} className="relative rounded-full  mr-3 text-2xl ">
    <span className='relative  '>
      {icon}
      <span className='absolute top-[-5px] left-2 w-2 h-2 rounded-full' style={{background:dotColor}}></span>
    </span>
    </button>
  </TooltipComponent>
)
}

const Navbar = () => {
  const {activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screen,setScreen,currentColor}=useStateContext();
  useEffect(()=>{
    console.log(isClicked);
},[isClicked])
 useEffect(()=>{
const handleResize=()=> setScreen(window.innerWidth);
window.addEventListener('resize',handleResize);
handleResize();
return()=> window.removeEventListener('resize',handleResize);
 },[])
useEffect(()=>{
if(screen <= 900 ){
  setActiveMenu(false);
}
else{
  setActiveMenu(true);
}
},[screen])
  return (
    <>
    <div className='flex justify-between items-center p-2 md:mx-6 relative'>
      <div className='flex'>
        <NavButton title="Menu" color={currentColor} requestFunc={()=>{setActiveMenu((menu)=> !menu)} } icon={<GiHamburgerMenu />} />
        <NavButton title="search" color={currentColor} icon={<AiOutlineSearch />} />
      </div>
      <div className='flex items-center'>
       <NavButton title="Cart" color={currentColor} icon={<AiOutlineShoppingCart />} dotColor="#00ffff" requestFunc={()=> handleClick('cart')}/>
       <NavButton title="Chat" color={currentColor} icon={<BsFillChatLeftFill />} dotColor="#00ffff" requestFunc={()=> handleClick('chat')}/> 
       <NavButton title="Notification" color={currentColor} icon={<RiNotification3Line />} dotColor="#00ffff" requestFunc={()=> handleClick('notification')}/>
       <TooltipComponent content="profile" position="BottomCenter" className='flex items-center cursor-poiter  hover:bg-light-gray rounded-lg' requestFunc={()=> handleClick('useProfile')} >
       

        
        <img src={Avatar} alt="Avatar" className='rounded-full w-5 h-5 ' />
        <p>Hi, <span className='font-bold text-slate-500 '>Michael</span></p>
       <RiArrowDropDownLine />
       </TooltipComponent>
{isClicked.cart && <Cart />}
    {isClicked.notification && <Notification />}
    {isClicked.chat && <Chat />}
    {isClicked.useProfile && <UseProfile />}
        </div>

    </div>
    
    </>
  )
}

export default Navbar