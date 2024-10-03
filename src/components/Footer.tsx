import React from 'react'
import { IconLogoWhite } from '../icons'

export const Footer:React.FC = () => {
  return (
    <>
      <footer className='flex flex-col items-center bg-black px-4 py-8 mt-[80px]
        lg:flex-row lg:justify-center
      '>
        <div className='max-w-[1130px] flex w-full justify-between flex-col items-center
          lg:flex-row
        '>
          <div className='border-solid border-b-[1px] border-violet2 w-full pb-6 flex justify-center
            lg:border-0 lg:pb-0 lg:justify-start
          '>
            <IconLogoWhite/>
          </div>
          <p className='text-[12px] text-white pt-6
            lg:pt-0 lg:w-full text-right
          '>
            © 2023 RIMAC Seguros y Reaseguros.
          </p>
        </div>
      </footer>
    </>
  )
}
