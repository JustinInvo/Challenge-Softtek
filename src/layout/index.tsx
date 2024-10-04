import React from 'react';
import { Navbar, Footer } from '../components';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { children } = props;

  return(
    <>
      <div className='min-h-screen flex flex-col justify-between relative overflow-hidden bg-login'>
        <div className='max-w-[1130px] mx-auto'>
        <Navbar/>
          <div className=''>
            { children }
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}