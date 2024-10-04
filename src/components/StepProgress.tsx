import React, { useEffect } from 'react';
import * as Progress from '@radix-ui/react-progress';
import { BackStep } from './BackStep';

interface Props {
  step: number,
  backLogin: () => void,
  controlStep: (value:number) => void
}

export const StepProgress:React.FC<Props> = ({step, backLogin, controlStep}) => {
  const [progress, setProgress] = React.useState(4);

  useEffect(() => {
    if(step === 1) {
      setProgress(4)
    }else{
      setProgress(step * 50)
    }
  }, [step])

  return (
    <>
      <div className={`text-[1rem] flex justify-center items-center py-6 border-solid border-b-[1px] border-violet px-4 transition
        lg:hidden
        ${step === 2 && 'hidden'}
      `}>
        <BackStep backLogin={backLogin} controlStep={controlStep} step={step}/>
        <p className='text-[0.75em] font-bold mx-3 w-fit'>
          Paso {step} de 2
        </p>
        <Progress.Root
          className="relative overflow-hidden bg-violet rounded-full w-full h-[8px] flex-1"
          style={{
            transform: 'translateZ(0)',
          }}
          value={progress}
        >
          <Progress.Indicator
            className="bg-violet3 rounded-xl w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>
      </div>
      <div className='hidden lg:flex bg-violet4 min-w-[100vw] absolute left-0 items-center justify-center h-[64px] gap-3'>
        <div className='flex gap-4'>
          <CircleNumber numberOption={1} step={step}/>
          <span className={`
            ${step=== 1 ? 'text-black font-bold' : 'text-violet'}
          `}>
            Planes y coberturas
          </span>
        </div>
        <div className={`w-[32px] border-dashed border-b-[2px]
          ${step=== 1 ? 'border-violet3' : 'border-violet'}
        `}></div>
        <div className='flex gap-4'>
          <CircleNumber numberOption={2} step={step}/>
          <span className={`
            ${step=== 2 ? 'text-black font-bold' : 'text-violet'}
          `}>
            Resumen
          </span>
        </div>
      </div>
    </>
  )
}

interface PropsCircle {
  numberOption: number
  step: number
}

const CircleNumber:React.FC<PropsCircle> = ({numberOption, step}) =>  (
  <div className={`text-[.75em] size-[24px] border-solid border-[1px]  rounded-full flex items-center justify-center 
    ${step == numberOption ? 'bg-violet3 border-violet3 text-white' : 'bg-transparent border-violet text-violet'}
  `}>
    {numberOption}
  </div>
)