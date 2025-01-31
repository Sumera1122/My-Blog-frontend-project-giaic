import React from 'react'
import Image from 'next/image'
import { MdFacebook } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='border-t mt-20 mb-20 flex mx-auto'>
        <div className='mt-8 flex-1'> 
            <div className='flex md:text-2xl max-sm:text-[16px] font-bold'>
            <Image src="/images/cat.jpg" alt="pic" width={100} height={100} className="rounded-[50%]" priority /> Blog
            </div>
            <p className='text-[10px] md:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sunt necessitatibus autem culpa. At, necessitatibus? Omnis!</p>
            <div className=' flex flex-1 space-x-1 text-[16px] '>
        <Link href="/"><MdFacebook className='text-blue-800 '/></Link>
        <Link href="/"> <FaSquareInstagram  className='text-pink-400'/></Link>
        <Link href="/"> <AiFillTikTok className='' /></Link>
        <Link href="/"><FaYoutube className=' text-red-600' /></Link>
        </div>
        </div>



        <div className='flex gap-10 mt-10 text-[12px] md:text-[14px]'>
        <div className=' flex flex-1 flex-col space-y-2'>
            <h6 className='text-lime-400 font-bold'>Links</h6>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">tour</Link>
            <Link href="#">Contact</Link>
        
     </div>
        <div className=' flex flex-1 flex-col space-y-2'>
            <h6 className='text-pink-700 font-bold'>Tags</h6>
            <Link href="#">Style</Link>
            <Link href="#">Fashion</Link>
            <Link href="#">Tour</Link>
            <Link href="#">Travel</Link>
        
     </div>
        <div className=' flex flex-1 flex-col space-y-2'>
            <h6 className='text-yellow-300 font-bold'>Social</h6>
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Tiktok</Link>
            <Link href="#">Youtube</Link>
        
     </div>

        </div>
    </footer>
  )
}

export default Footer
