import React from 'react'
interface Props {
  color?: string | undefined
}

export const IconBack:React.FC<Props> = ({color}) => {
  return (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_16001_295)">
          <circle cx="12" cy="12" r="11" stroke="#A9AFD9" stroke-width="2"/>
          <path d="M12.9715 15.9037L9.06396 11.9999L12.9715 8.09619L14.029 9.15369L11.1865 11.9999L14.029 14.8462L12.9715 15.9037Z" fill={color || '#A9AFD9'}/>
        </g>
        <defs>
          <clipPath id="clip0_16001_295">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </>
  )
}
