import React from 'react'
import { IconLogo, IconPhone } from '../icons/'

export const Navbar:React.FC = () => {
  return (
    <>
      <div className='text-[1rem] flex items-center justify-between w-full p-3 max-w-[1130px]'>
        <IconLogo/>
        <div className='flex items-center gap-2'>
          <p className='hidden text-[.75em]
            lg:block
          '>¡Compra por este medio!</p>
          <IconPhone/>
          <a href="tel:014116001" className='font-bold'>(01) 411 6001</a>
        </div>
      </div>
    </>
  )
}
