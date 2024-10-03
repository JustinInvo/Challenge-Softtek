import React from 'react'
import { IconLogoWhite } from '../icons'

export const Footer:React.FC = () => {
  return (
    <>
      <footer className='flex flex-col items-center bg-black px-4 py-8 mt-[80px]'>
        <div className='border-solid border-b-[1px] border-violet2 w-full mx-auto pb-6'>
          <IconLogoWhite/>
        </div>
        <p className='text-[12px] text-white pt-6'>© 2023 RIMAC Seguros y Reaseguros.</p>
      </footer>
    </>
  )
}
