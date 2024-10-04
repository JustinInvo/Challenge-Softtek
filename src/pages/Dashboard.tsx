import React, { useState } from 'react';
import { StepProgress, CardOption, ListPlans, BackStep } from '../components';
import { useDataUserStore } from '../store';

export const Dashboard:React.FC = () => {
  const [ step, setStep ] = useState(2)
  const [ selectedOption, setSelectedOption ] = useState<number | null>(null)
  const { name } = useDataUserStore()

  const options = [
    {
      icon: '/img/card-option-1.webp',
      title: 'Para mí',
      description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas',
      value: 1
    },
    {
      icon: '/img/card-option-2.webp',
      title: 'Para alguien más',
      description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
      value: 2
    }
  ]

  const selectecTypePlan = (value:number) =>{
    setSelectedOption(value)
  }

  return (
    <>
      <StepProgress step={step}/>
      <div className='hidden lg:block lg:pt-[80px]'>
        <BackStep/>
      </div>
      <div className='text-[1rem] px-4 mt-4 max-w-[360px]
        sm:max-w-[440px]
        sd:max-w-[580px]
        md:max-w-[700px]
        ml:max-w-[920px]
        lg:max-w-[960px]
      '>
        <h4 className='text-[1.75em] font-bold text-wrap leading-[1.2em] mb-3
          lg:text-[2.5em] lg:text-center
        '>
          {name} ¿Para quién deseas cotizar?
        </h4>
        <p className='mb-4 lg:text-center lg:mb-8'>Selecciona la opción que se ajuste más a tus necesidades.</p>
        <div className='flex flex-col gap-6
          lg:flex-row lg:justify-center
        '>
          {options.map((item, index) => (
            <CardOption {...item} key={index} 
              selectecTypePlan={selectecTypePlan} 
              selectedOption={selectedOption}
            />
          ))}
        </div>
        <ListPlans/>
      </div>
    </>
  )
}
