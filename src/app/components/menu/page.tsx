import Link from 'next/link'
import React from 'react'
import MenuCategory from '../menucategory'

const Menu = () => {
  return (
    <main className='flex-2 md:w-[30%] md:mt-48 max-sm:mt-[120px] max-sm:ml-8  max-md:mt-[120px] max-md:ml-4'>
      <h6 className='md:text-[10px] md:ml-40 max-sm:text-[8px] max-md:ml-8 max-md:text-[10px] max-sm:ml-4'>what is hot</h6>
      <h2 className='md:text-2xl font-semibold md:ml-40 md:mb-10 max-sm:text-[16px] max-sm:ml-4 max-sm:mb-10  max-md:text-[20px] max-md:ml-4 max-md:mb-10'>Most Popular</h2>
       {/* 1st card */}
      <div className='max-sm:space-y-4  max-md:space-y-4 md:space-y-8'>
        <Link href="/" className='flex max-sm:flex-col '>
         <div className='max-sm:ml-2'>
          <div className='w-[80px] h-[30px] bg-[#ff7857] flex justify-center items-center font-bold rounded-[20px] md:mb-2'>
          Travel
         </div>
        <p className='text-[14px] max-sm:text-[10px] max-sm:mt-4'>Nestled in the heart of the South Pacific, Bora Bora is a tropical paradise.</p>
        <div className='flex gap-2 text-[13px] md:mt-4'>
          <span>John Doe</span>
          <span>10.03.2023</span>
        </div>
        </div>
        
        </Link>


        {/* 2nd menu */}

        <Link href="/" className='flex max-sm:flex-col'>
        
         <div className='md:flex-1 max-sm:ml-2'>
          <div className='w-[80px] h-[30px] bg-[#67f3d2] flex justify-center items-center font-bold rounded-[20px] md:mb-2'>
          Fashion
         </div>
        <p className='text-[14px] max-sm:text-[10px] max-sm:mt-4'>Fashion is not just about appearances; it is a language without words. Through its transformative power.</p>
        <div className='flex gap-2 text-[13px] md:mt-4'>
          <span>John Doe</span>
          <span>10.03.2023</span>
        </div>
        </div>
        
        </Link>

        {/* 3rd menu */}
        <Link href="/" className='flex max-sm:flex-col'>
         <div className='md:flex-1 max-sm:ml-2'>
          <div className='w-[80px] h-[30px] bg-[#e2fb66] flex justify-center items-center font-bold rounded-[20px] md:mb-2'>
          Food
         </div>
        <p className='text-[14px] max-sm:text-[10px] max-sm:mt-4'>Food is a universal language that nourishes the body, delights the senses.</p>
        <div className='flex gap-2 text-[13px] md:mt-4'>
          <span>John Doe</span>
          <span>10.03.2023</span>
        </div>
        </div>
        
        </Link>



      </div>

      {/* 2nd div................................................................................ */}
      <div>
        <MenuCategory/>
      </div>





      {/* 3rd div.............................................................*/}
      <div className='mt-14 max-md:mb-10  max-sm:ml-0 '> 
      <h6 className='max-sm:text-[8px] max-md:ml-36 font-bold max-sm:ml-0'>discover by topic</h6>
      <h1 className='max-sm:text-[16px] max-md:ml-36 max-md:mb-10 max-md:text-[18px] max-sm:ml-0'>Editors Pick</h1>
        <Link href="/" className='flex max-sm:flex-col max-md:ml-2'>
        <div className='md:flex-1  '>
          <img src={'/images/menu-5.jpg'} alt="pic" className='max-sm:w-[50px] max-sm:h-[50px] max-sm:ml-4  max-sm:mb-4 rounded-[50%] md:w-[100px] md:h-[100px] md:ml-20 border cover mt-5 mr-10]'/>
        </div>
         <div className='md:flex-1 max-sm:ml-2 max-md:ml-4'>
          <div className='w-[80px] h-[30px] bg-[#c955ec] flex justify-center items-center font-bold rounded-[20px] md:mb-2'>
          Dressing
         </div>
        <p className='text-[14px] max-sm:text-[10px] max-sm:mt-4'>Nestled in the heart of the South Pacific, Bora Bora is a tropical paradise.</p>
        <div className='flex gap-2 text-[13px] md:mt-4 '>
          <span>John Doe</span>
          <span>10.03.2023</span>
        </div>
        </div>
        
        </Link>


        {/* 2nd menu */}

        <Link href="/" className='flex max-sm:flex-col max-md:ml-2'>
        <div className='md:flex-1'>
          <img src={'/images/menu-7.jpg'} alt="pic" className='max-sm:w-[50px] max-sm:h-[50px] max-sm:ml-4  max-sm:mb-4 rounded-[50%] md:w-[100px] md:h-[100px] md:ml-20 border cover mt-5 mr-10]'/>
        </div>
         <div className='md:flex-1 max-sm:ml-2  max-md:ml-4'>
          <div className='w-[80px] h-[30px] bg-[#fd6bcc] flex justify-center items-center font-bold rounded-[20px] md:mb-2'>
          Dance
         </div>
        <p className='text-[14px] max-sm:text-[10px] max-sm:mt-4'>Nestled in the heart of the South Pacific, Bora Bora is a tropical paradise.</p>
        <div className='flex gap-2 text-[13px] md:mt-4'>
          <span>John Doe</span>
          <span>10.03.2023</span>
        </div>
        </div>
        
        </Link>

        {/* 3rd menu */}
        <Link href="/" className='flex max-sm:flex-col max-md:ml-2'>
        <div className='md:flex-1'>
          <img src={'/images/menu-6.jpg'} alt="pic" className='max-sm:w-[50px] max-sm:h-[50px] max-sm:ml-4  max-sm:mb-4 rounded-[50%] md:w-[100px] md:h-[100px] md:ml-20 border cover mt-5 mr-10] '/>
        </div>
         <div className='md:flex-1 max-sm:ml-2 max-md:ml-4'>
          <div className='w-[80px] h-[30px] bg-[#defc31] flex justify-center items-center font-bold rounded-[20px] md:mb-2'>
          Clothing
         </div>
        <p className='text-[14px] max-sm:text-[10px] max-sm:mt-4 '>Nestled in the heart of the South Pacific, Bora Bora is a tropical paradise.</p>
        <div className='flex gap-2 text-[13px] md:mt-4'>
          <span>John Doe</span>
          <span>10.03.2023</span>
        </div>
        </div>
        
        </Link>



      </div>
    </main>
  )
}

export default Menu
