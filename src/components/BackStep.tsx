import React from 'react'
import { IconBack } from '../icons'

interface Props {
  step: number,
  backLogin: () => void,
  controlStep: (value:number) => void
}

export const BackStep:React.FC<Props> = ({ step, backLogin, controlStep}) => {
  return (
    <>
      <div className='text-[1rem] cursor-pointer flex gap-2 text-violet3 items-center'
        onClick={() => step===1 ? backLogin() : controlStep(step-1)}
      >
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
