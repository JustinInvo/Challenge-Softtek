import React from 'react'
import { IconBack } from '../icons'

export const BackStep = () => {
  return (
    <>
      <div className='text-[1rem] cursor-pointer flex gap-2 text-violet3 items-center'>
        <IconBack color='#4F4FFF' size='20'/>
        <span className='hidden font-bold text-[1.125em]
          lg:block
        '>
          Volver
        </span>
      </div>
    </>
  )
}
