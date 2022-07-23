import React from 'react'
import  {BsCurrencyDollar} from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';
import { Stacked,Pie,SpartLine } from '../component';
import {Btn} from '../component'
import { earningData,SparklineAreaData,ecomPieChartDat } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { icons } from 'react-icons/lib';
const Ecommerce = () => {
  const {currentColor} =useStateContext()
  return (
    <div className='mt-12'>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className='bg-white dark:text-gray-200 
        dark:bg-main-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 
        pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='font-bold text-gray-400'>Earnings</p>
                <p className='text-2xl mb-2'>$63,448,78</p>
               
              </div>
            </div>
             <Btn text="Download" color="white" borderRadius="10px" size="md" bgColor={currentColor} />
       
      </div>
      <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
       
        {earningData.map((item)=>{ 
          const {icon,amount,percentage,title,iconColor,iconBg,pcColor}=item;
          return(
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
            md:w-56 p-4 ot-9 rounded-2xl'>
              <button style={{color:iconColor,backgroundColor:iconBg }}>
               {icon} 
               </button>
               <p className='mt-3'>
              <span className='text-lg font-semibold'>
                {amount}
              </span>
              <span className={`text-sm text-${pcColor} ml-2`}>
                {percentage}

              </span>
               </p>
               <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          )
        })}
      </div>
    </div>
    <div className='flex gap-10 flex-wrap justify-center'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg-dark-bg m-3 p-4 rounded-2xl md:w-780'>
            <div className='flex justify-between'>
              <p className='font-semibold text-xl'>Revenue Updates</p>
              <div className='flex items-center gap-4'> 
                  <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                    <span><GoPrimitiveDot /></span>
                    <span>Expense </span>
                  </p>
                  <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                    <span><GoPrimitiveDot /></span>
                    <span>Budget</span>
                  </p>
              </div>
            </div>
            <div className="mt-10 flex gap-10 flex-wrap justify-center">
              <div className='border-color m-4 pr-10 '>
               <div>
                <p>
                  <span className='text-3xl font-semibold' >$93,438</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full
                   text-white bg-green-400 ml-3 text-xs'>23%</span>
                </p> 
                <p className='text-gray-500 mt-1'>Budget</p>
               </div>
               <div className='mt-5'>
                <p>
                  <span className='text-3xl font-semibold' >$48,438</span>
                 
                </p> 
                <p className='text-gray-500 mt-1'>Expense</p>
               </div>
               <div className='mt-5'>
                <SpartLine width="250px" height="80px" data={SparklineAreaData} id="line-sparkline" type="Line" color={currentColor} currentColor={currentColor} />
               </div>
               <div className='mt-10'>
               <Btn text="Download Report" color="white" borderRadius="10px" size="md" bgColor={currentColor} />
               </div>
              </div>
              <Stacked width="300px" height="500px" id="chart"/>
            </div>
          </div>
    </div>
     </div>
  )
}

export default Ecommerce