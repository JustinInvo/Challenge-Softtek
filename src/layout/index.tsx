import React from 'react';
import { Navbar } from '../components';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { children } = props;

  return(
    <>
      <div className='min-h-screen'>
        <Navbar/>
        <div className='flex items-center justify-center'>
          { children }
        </div>
      </div>
    </>
  )
}