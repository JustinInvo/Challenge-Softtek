import React from 'react';
import { Navbar, Footer } from '../components';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { children } = props;

  return(
    <>
      <div className='min-h-screen'>
        <div className='max-w-[1130px] mx-auto'>
        <Navbar/>
          <div className='px-4'>
            { children }
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}