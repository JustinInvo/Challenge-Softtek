import React, { useEffect, useState } from 'react';
import { StepProgress, CardOption, ListPlans, BackStep, CardSummary } from '../components';
import { useDataUserStore } from '../store';
import { useNavigate } from "react-router-dom";
import { PLAN } from '../services/types';

export const Dashboard:React.FC = () => {
  const [ step, setStep ] = useState<number>(1)
  const [ selectedOption, setSelectedOption ] = useState<number | null>(null)
  const [ selectedPlan , setSelectedPlan ] = useState<PLAN | null>(null)
  const { name, lastName, birthDay } = useDataUserStore();
  const navigate = useNavigate();

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

  const backLogin = () => {
    navigate("/")
  }

  const controlStep = (value:number) => {
    setStep(value)
  }

  const setDataPlan = (data:PLAN) => {
    setSelectedPlan(data)
  }

  useEffect(() => {
    if(!birthDay){
      navigate('/')
    }
  })

  return (
    <>
      <StepProgress backLogin={backLogin} controlStep={controlStep} step={step}/>
      <div className='hidden lg:block lg:pt-[80px] lg:mb-[40px]'>
        <BackStep backLogin={backLogin} controlStep={controlStep} step={step}/>
      </div>
      <div className={`transition
          ${step === 1 ? 'block' : 'hidden'}
        `}>
        <div className='text-[1rem] px-4 mt-4 w-[360px]
          sm:w-[440px]
          sd:w-[580px]
          md:w-[700px]
          ml:w-[900px]
          lg:w-[928px]
        '>
          <h4 className='text-[1.75em] font-bold text-wrap leading-[1.2em] mb-3
            lg:text-[2.5em] lg:text-center
          '>
            {name} ¿Para quién deseas <br className='hidden lg:block'/> cotizar?
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
          {selectedOption &&
            <ListPlans controlStep={controlStep} setDataPlan={setDataPlan} birthDay={birthDay} selectedOption={selectedOption}/>
          }
        </div>
      </div>
      <div className={`transition
          ${step === 2 ? 'block' : 'hidden'}
        `}>
          <h6 className='text-[2em] font-bold mt-4
            lg:text-[2.5em] 
          '>
            Resumen del seguro
          </h6>
          <CardSummary name={name} lastName={lastName} data={selectedPlan}/>
        </div>
    </>
  )
}
