import React, { useState } from 'react';
import { StepProgress } from '../components';
import { useDataUserStore } from '../store';

export const Dashboard:React.FC = () => {
  const [step, setStep ] = useState(1)
  const { name } = useDataUserStore()
  return (
    <>
      <StepProgress step={step}/>
      <div className='text-[1rem] px-4 mt-4'>
        <h4 className='text-[1.75em] font-bold text-wrap leading-[1.2em] mb-3'>
          {name} ¿Para quién deseas cotizar?
        </h4>
        <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
      </div>
    </>
  )
}
