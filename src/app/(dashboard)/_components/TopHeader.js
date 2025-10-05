import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import React from 'react'

function TopHeader() {
  return (
    <div className='flex p-5 border-b items-center justify-between bg-white'>
      <img src='/logoipsum-360.png' width={150} height={100} />
      <UserButton />
    </div>
  )
}

export default TopHeader

