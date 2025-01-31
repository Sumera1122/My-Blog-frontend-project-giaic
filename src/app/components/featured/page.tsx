"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Featured = () => {
  const router= useRouter()
  return (
    <div className='mt-[30px]  '>
      <div className='text-3xl font-bold max-sm:text-[20px] max-sm:leading-5'>Hey, lama dev here! <span className='font-normal max-sm:text-[16px] '>Discover my stories and creative ideas.</span></div>
      <div className='mt-[60px] flex items-center gap-[50px] max-sm:flex-col max-sm:gap-6'>

          <div className='flex-1 h-[500px] relative '>
            <Image src='/images/p1.jpeg' alt="pic" fill className='cover'/>
            </div>

            <div className='flex-1 flex flex-col gap-[20px] '>
              <h2 className='text-2xl max-sm:text-[18px]'>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h2>
              <p className='text-[18px]  '> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.</p>
            <button type="button"
            onClick={()=>router.push('/')}
             className=' w-[180px] pl-[10px] pr-[10px] font-medium pt-[16px] pb-[16px] rounded-[5px] border-none bg-yellow-400'>Read more</button>
            </div>






      </div>
    </div>
  )
}

export default Featured
