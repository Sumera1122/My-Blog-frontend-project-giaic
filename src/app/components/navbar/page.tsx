"use client"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { RiMenuFoldFill } from "react-icons/ri";

import Link from 'next/link'
import React from 'react'
import { MdFacebook } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { ModeToggle } from "../providers";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className=' flex justify-center items-center space-x-16 p-2 sm:space-x-4'>
    {/* social links */}
        <div className=' flex flex-1 space-x-1 text-[16px] '>
        <Link href="#"><MdFacebook className='text-blue-800 '/></Link>
        <Link href="#"> <FaSquareInstagram  className='text-pink-400'/></Link>
        <Link href="#"> <AiFillTikTok className='' /></Link>
        <Link href="#"><FaYoutube className=' text-red-600' /></Link>
        </div>

    {/* logo */}
        <div className='flex-1 font-bold text-[20px] sm:text-[26px]'>
            Blog

        </div>

    {/* nav links */}
         <div className=' flex flex-1 space-x-8 max-sm:hidden sm:hidden md:block text-[16px] font-semibold'>
            <UserButton  />
            <Link href="#">HomePage</Link>
            <Link href="#">About</Link>
            <Link href="#">tour</Link>
            <Link href="#">Contact</Link>
            <ModeToggle />
     </div>

     <Sheet>
  <SheetTrigger className=" md:hidden text-[18px] sm:text-[24px] "><RiMenuFoldFill /></SheetTrigger>
  <SheetContent className="bg-white text-black mr-4">
    <SheetHeader>
      <SheetTitle>Blog</SheetTitle>
      <SheetDescription>
      <div className=' flex flex-col space-y-8 '>
            <UserButton />
            <Link href="#">HomePage</Link>
            <Link href="#">About</Link>
            <Link href="#">tour</Link>
            <Link href="#">Contact</Link>
            
            <div className="bg-black w-[40px] font-bold">

            <ModeToggle />
            </div>

            

     </div>

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>




    </nav>
  )
}

export default Navbar
