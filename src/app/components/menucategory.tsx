import Link from 'next/link'
import React from 'react'

const MenuCategory = () => {
  return (
    <main className= ' md:w-[90%] md:my-[50px] md:px-4 max-sm:w-full max-sm:flex max-sm:flex-col max-md:flex-col '>
      <h1 className=' md:my-[50px] md:mx-0 max-sm:py-8 flex justify-center items-center font-bold max-sm:text-[14px] max-md:my-8 max-md:text-xl md:text-2xl max-sm:space-y-10'> Popular Categories</h1>
      <div  className=' flex md:justify-between md:flex-wrap max-sm:flex-col max-sm:space-y-4 max-md:items-center max-md:flex-wrap max-md:gap-6 md:space-y-2'>
        <div className='bg-[#a7daf631] max-md:bg-pink-600 w-[15%] md:w-[40%] md:h-[80px] rounded-[10px] flex justify-center items-center max-sm:w-[86%] max-sm:h-[40%] max-sm:p-6 max-md:w-[40%] max-md:p-8 mad-md:h-[15%]]'>
          <Link href="/" className='flex justify-center items-center  '>
          <img src="/images/styles1.jpg" alt="styles" width={50} height={50} className='rounded-[50%] mr-2'/>Peace
          </Link>
        </div>

        <div className='bg-[#f536cb31] max-md:bg-yellow-400 w-[15%] h-[120px] md:w-[40%] md:h-[80px] rounded-[10px] flex justify-center items-center max-sm:w-[86%] max-sm:h-[40%] max-sm:p-4  max-md:w-[40%]  max-md:p-8 mad-md:h-[15%] '>
          <Link href="/" className='flex justify-center items-center'>
          <img src="/images/fashni.jpg" alt="fashion"  width={50} height={50} className='rounded-[50%] mr-2'/> Makeup
          </Link>
        </div>

        <div className='bg-[#2aef3033] max-md:bg-green-500 w-[15%] h-[120px]  md:w-[40%] md:h-[80px] rounded-[10px] flex justify-center items-center max-sm:w-[86%] max-sm:h-[40%] max-sm:p-4  max-md:w-[40%] max-md:p-8 mad-md:h-[15%] '>
          <Link href="/" className='flex justify-center items-center'>
          <img src="/images/foody.jpg" alt="food"  width={50} height={50} className='rounded-[50%] mr-2'/> Tour
          </Link>
        </div>

        <div className='bg-[#f14b2136] max-md:bg-lime-700 w-[15%] h-[120px]  md:w-[40%] md:h-[80px] rounded-[10px] flex justify-center items-center max-sm:w-[86%] max-sm:h-[40%] max-sm:p-4  max-md:w-[40%] max-md:p-8 mad-md:h-[15%] '>
          <Link href="/" className='flex justify-center items-center'>
          <img src="/images/traveler.jpg" alt="travel"  width={50} height={50} className='rounded-[50%] mr-2'/> Carrier
          </Link>
        </div>


        <div className='bg-[#7ae9a136] max-md:bg-orange-400 w-[15%] h-[120px]  md:w-[40%] md:h-[40px] md:p-8 rounded-[10px] flex justify-center items-center max-sm:w-[86%] max-sm:h-[40%] max-sm:p-4  max-md:w-[40%] max-md:p-8 mad-md:h-[15%] '>
          <Link href="/" className='flex justify-center items-center'>
          <img src="/images/cultural.jpg" alt="culture" width={50} height={50} className='rounded-[50%] mr-2'/> Fitness
          </Link>
        </div>


        <div className='bg-[#a2a0f636] max-md:bg-red-500 w-[15%] h-[120px]  md:w-[40%] md:h-[80px] rounded-[10px] flex justify-center items-center max-sm:w-[86%] max-sm:h-[40%] max-sm:p-4  max-md:w-[40%] max-md:p-8 mad-md:h-[15%] '>
          <Link href="/" className='flex justify-center items-center'>
          <img src="/images/fashni.jpg" alt="coding" width={50} height={50} className='rounded-[50%] mr-2'/> Health
          </Link>
        </div>



      </div>

  
    </main>
  )
}

export default MenuCategory
