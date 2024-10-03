import React from 'react';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { children } = props;

  return(
    <>
      <div className='flex items-center justify-center min-h-screen'>
        { children }
      </div>
    </>
  )
}