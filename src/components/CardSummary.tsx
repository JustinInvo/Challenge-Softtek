import React from 'react';
import { PLAN } from '../services/types';
import { IconUsers } from '../icons';

interface Props {
  name: string | null,
  lastName: string | null,
  data: PLAN | null
}


export const CardSummary:React.FC<Props> = ({name, lastName, data}) => {
  return (
    <>
      <div className='text-[1rem] ease duration-200 w-[288px] rounded-xl min-h-1 px-8 py-10 relative shadow-[0_0_15px_0_rgba(204,209,238,1)] h-full flex flex-col justify-between bg-white mx-auto mt-8
        sm:text-[1.1rem]
        md:text-[1.18rem]
        lg:text-[1.25rem] lg:w-[928px]
      '>
        <p className='text-[10px] uppercase font-bold mb-2'>Precios calculados para:</p>
        <div className='w-full border-solid border-b-[1px] border-violet pb-4 mb-4 flex items-center gap-3'>
          <IconUsers/>
          <strong>{name} {lastName}</strong>
        </div>
        <div className='text-[14px] flex flex-col items-start gap-4'>
          <div className='flex flex-col gap-1'>
            <b className='text-[16px]'>Responsable de pago</b>
            <span>DNI: 44488888</span>
            <span>Celular: 5130216147</span>
          </div>
          {data &&
            <div className='flex flex-col gap-1'>
              <b className='text-[16px]'>Plan elegido</b>
              <span>{data.name}</span>
              <span>Costo del Plan: ${data.price} al mes</span>
            </div>
          }
        </div>
      </div>
    </>
  )
}
