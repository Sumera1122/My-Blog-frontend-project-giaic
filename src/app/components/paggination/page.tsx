import { Button } from '@/components/ui/button'
import React from 'react'

const Paggination = () => {
  return (
    <main className=' flex'>
      <div className='flex-1 w-[80px]'>
        <Button>Next</Button>
      </div>
      <div className='flex-1'>
        <Button>Previous</Button>
      </div>
    </main>
  )
}

export default Paggination
