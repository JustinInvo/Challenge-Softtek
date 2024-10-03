import React, { useEffect } from 'react';
import * as Progress from '@radix-ui/react-progress';
import { IconBack } from '../icons';

interface Props {
  step: number
}

export const StepProgress:React.FC<Props> = ({step}) => {
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
      <div className='text-[1rem] flex justify-center items-center py-6 border-solid border-b-[1px] border-violet px-4'>
        <div className='cursor-pointer'>
          <IconBack/>
        </div>
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
    </>
  )
}
