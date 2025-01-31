import React from 'react'
import Paggination from '../paggination/page'
import Card from '../card/card'

const CardList = () => {
  return (
    <>
    <div className='flex-5 flex flex-col gap-4 w-[65%] mt-32'>
      <h1 className='md:text-2xl md:m-10 font-semibold max-sm:text-[16px] max-sm:mb-10 max-md:text-[20px]'>Recent Posts</h1>
       <Card/>
       <Paggination/>

    </div>
    </>
  )
}

export default CardList


