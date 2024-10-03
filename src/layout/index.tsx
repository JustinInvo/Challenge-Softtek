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
        <Navbar/>
        <div className='px-4'>
          { children }
        </div>
        <Footer/>
      </div>
    </>
  )
}