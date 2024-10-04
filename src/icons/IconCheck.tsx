import React from 'react'

interface Props {
  color: string | null
}

export const IconCheck:React.FC<Props> = ({color}) => {
  return (
    <>
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.49992 9.41492L0.794922 5.70492L2.20493 4.29492L4.49992 6.58492L10.5449 0.544922L11.9549 1.95492L4.49992 9.41492Z" fill={color || 'white'}/>
      </svg>
    </>
  )
}
