import React from 'react'
import { PLAN } from '../services/types'
import { IconPlanHouse } from '../icons'

interface Props {
  data: PLAN,
  nextSummary: (value:number, data:PLAN) => void;
}

export const CardPlan:React.FC<Props> = ({data, nextSummary}) => {


  return (
    <>
      <div className='text-[1rem] ease duration-200 w-[288px] rounded-xl min-h-1 cursor-pointer px-8 py-10 relative shadow-[0_0_15px_0_rgba(204,209,238,1)] h-full flex flex-col justify-between bg-white'
        onClick={() => nextSummary(2, data)}
      > 
        <div>
          <div className='flex justify-between gap-4'>
            <h3 className='text-[1.5em] font-bold leading-[1.2]
              lg:mb-6
            '>
              {data.name}
            </h3>
            <IconPlanHouse/>
          </div>
          <div className='pb-5 mb-5 border-solid border-b-[1px] border-violet leading-[1.3]'>
            <p className='text-[.75em] w-full uppercase font-bold text-violet2
              lg:mb-2
            '>
              Costo del plan
            </p>
            <b className='text-[1.25em]'>${data.price} al mes</b>
          </div>
          
          <ul className='list-disc pl-4 flex flex-col gap-4'>
            {data.description.map((item, key) => (
              <li className='text-balance' key={key}>{item}</li>
            ))}
          </ul>
        </div>
        <button className='bg-red text-white rounded-[28px] w-full h-[48px] mt-8'>
          Seleccionar plan
        </button>
      </div>
    </>
  )
}
