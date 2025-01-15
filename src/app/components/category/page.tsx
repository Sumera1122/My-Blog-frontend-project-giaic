import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Category = () => {
  return (
    <main className= ' md:flex-row md:w-[90%] md:my-[50px] md:px-4 max-sm:w-full max-sm:flex max-sm:flex-col max-md:flex-col'>
      <h1 className=' md:my-[50px] md:mx-0 max-sm:py-8 flex justify-center items-center font-bold max-sm:text-[16px] max-md:my-8 max-md:text-xl md:text-2xl'> Popular Categories</h1>
      <div  className=' flex md:justify-between max-sm:flex-col max-sm:space-y-4 max-md:items-center max-md:flex-wrap max-md:gap-6'>
        <div className='bg-[#38b3f631] w-[15%] md:h-[120px] rounded-[10px] flex justify-center items-center max-sm:w-[86%] max-sm:h-[40%] max-sm:p-6 max-md:w-[40%] max-md:p-8 mad-md:h-[15%]]'>
          <Link href="/" className='flex justify-center items-center  '>
          <Image src="/images/styles1.jpg" alt="styles" width={50} height={50} className='rounded-[50%] mr-2'/> Styles
          </Link>
        </div>

        <div className='bg-[#e281cd31] w-[15%] h-[120px] rounded-[10px] flex justify-center items-center max-sm:w-[86%] max-sm:h-[40%] max-sm:p-4  max-md:w-[40%] max-md:p-8 mad-md:h-[15%] '>
          <Link href="/" className='flex justify-center items-center'>
          <Image src="/images/fashni.jpg" alt="fashion"  width={50} height={50} className='rounded-[50%] mr-2'/> Fashion
          </Link>
        </div>

        <div className='bg-[#7af47e33] w-[15%] h-[120px] rounded-[10px] flex justify-center items-center max-sm:w-[86%] max-sm:h-[40%] max-sm:p-4  max-md:w-[40%] max-md:p-8 mad-md:h-[15%] '>
          <Link href="/" className='flex justify-center items-center'>
          <Image src="/images/foody.jpg" alt="food"  width={50} height={50} className='rounded-[50%] mr-2'/> Food
          </Link>
        </div>

        <div className='bg-[#e1836b36] w-[15%] h-[120px] rounded-[10px] flex justify-center items-center max-sm:w-[86%] max-sm:h-[40%] max-sm:p-4  max-md:w-[40%] max-md:p-8 mad-md:h-[15%] '>
          <Link href="/" className='flex justify-center items-center'>
          <Image src="/images/traveler.jpg" alt="travel"  width={50} height={50} className='rounded-[50%] mr-2'/> Travel
          </Link>
        </div>


        <div className='bg-[#2ea35736] w-[15%] h-[120px] rounded-[10px] flex justify-center items-center max-sm:w-[86%] max-sm:h-[40%] max-sm:p-4  max-md:w-[40%] max-md:p-8 mad-md:h-[15%] '>
          <Link href="/" className='flex justify-center items-center'>
          <Image src="/images/cultural.jpg" alt="culture" width={50} height={50} className='rounded-[50%] mr-2'/> Culture
          </Link>
        </div>


        <div className='bg-[#d3f64536] w-[15%] h-[120px] rounded-[10px] flex justify-center items-center max-sm:w-[86%] max-sm:h-[40%] max-sm:p-4  max-md:w-[40%] max-md:p-8 mad-md:h-[15%] '>
          <Link href="/" className='flex justify-center items-center'>
          <Image src="/images/fashni.jpg" alt="coding" width={50} height={50} className='rounded-[50%] mr-2'/> Coding
          </Link>
        </div>



      </div>

  
    </main>
  )
}

export default Category
