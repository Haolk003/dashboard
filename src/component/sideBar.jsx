import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FaShopware} from 'react-icons/fa';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {links} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
const SideBar = () => {
  const {activeMenu,setActiveMenu,screen,currentColor}=useStateContext()
    const activeLink=`flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 `;
    const nomalLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rouded-lg text-md m-2 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
    const handleClose=()=>{
      if(activeMenu && screen <=900){
        setActiveMenu(false);
      }
    }
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 '>
        {activeMenu &&( <><div className='flex justify-between items-center py-2 '>
            <Link to="/" className="flex items-center  dark:text-white text-slate-900 font-bold ml-3 text-2xl" onClick={ handleClose} >
                <FaShopware className='mr-2' />
                <span>Shoppy</span>
            </Link>
            <TooltipComponent position='BottomCenter' content="Close" className='text-xl' >
                <AiOutlineCloseCircle className='hover:bg-light-gray block ' onClick={()=>{setActiveMenu((menu)=> !menu)}}/>
            </TooltipComponent>
            </div>
            <div>
            {links.map((item)=>{
              return(
                <div key={item.title} >
                  <p className="mt-5 uppercase ml-3 text-gray">{item.title}</p>
                  {item.links.map((link)=>(
                    <NavLink to={`/${link.name}`} key={link.name} style={({isActive})=>({ backgroundColor:isActive ? currentColor : "" })} className={({isActive})=> isActive ? activeLink : nomalLink }  onClick={ handleClose} >
                      {link.icon}
                      <span>
                        {link.name} 
                      </span>
                    </NavLink>
            ))}
                  </div>
              )
            })}
            </div>
            </>)}
    </div>
  )
}

export default SideBar