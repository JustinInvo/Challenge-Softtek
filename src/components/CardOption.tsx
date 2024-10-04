import React from 'react'
import { IconCheck } from '../icons'

interface Props {
  icon: string,
  title: string,
  description: string,
  value: number,
  selectecTypePlan: (value:number) => void;
  selectedOption: number | null
}

export const CardOption:React.FC<Props> = ({icon, title, description, value, selectecTypePlan, selectedOption}) => {
  return (
    <>
      <div className={`text-[1rem] ease duration-200 rounded-xl min-h-1 px-4 py-8 relative shadow-[0_0_15px_0_rgba(204,209,238,1)] cursor-pointer
        lg:max-w-[256px]
        ${selectedOption=== value ? 'outline outline-[3px] outline-offset-2' : ''}
      `}
        onClick={()=> selectecTypePlan(value)}
      >
        <div className={`absolute right-[1em] top-[1em] size-[24px] rounded-full border-solid border-[1px] border-violet flex items-center justify-center
            ${selectedOption=== value ? 'bg-green border-green' : null}
          `}>
          <IconCheck color={selectedOption=== value ? 'white' :'transparent'}/>
        </div>
        <div className='flex items-center gap-2 mb-2
          lg:flex-col lg:items-start
        '>
          <img src={icon} alt={title} className='size-[32px] lg:size-[48px]'/>
          <h6 className='font-bold lg:text-[1.25em]'>
            {title}
          </h6>
        </div>
        <p className='text-[.75em]'>{description}</p>
      </div>
    </>
  )
}
