import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useListPlans } from '../services/hooks';
import { CardPlan } from './';

export const ListPlans:React.FC = () => {
  const { getListPets, plans, loading } = useListPlans()
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    getListPets()
  }, [])

  const responsive = {
    desktopLarge: {
      breakpoint: { max: 6000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 730 },
      items: 2.2
    },
    tabletLG: {
      breakpoint: { max: 730, min: 630 },
      items: 1.6
    },
    tablet: {
      breakpoint: { max: 630, min: 464 },
      items:  1.08
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.2,
    }
  };

  return (
    <>
      <div className='w-full'>
        {loading ?
          <div>Cargando...</div>
          :
          <>
            {!plans ?
            <div>No tienes mascotas registradas por el momento</div>
            :
            <>
              <Carousel 
                afterChange={(currentSlide) => setCurrentSlide(currentSlide)}
                centerMode={false}
                arrows={true}
                responsive={responsive} 
                infinite={false} 
                itemClass="px-2 py-6"
                dotListClass="mb-[-4px]"
                removeArrowOnDeviceType={["desktop", "desktopLarge"]}
                renderArrowsWhenDisabled={true}
              >
              {
                plans?.map((item, key) => (
                  <CardPlan {...item} key={key}/>
                ))
              }
              </Carousel>
              asdasd:{currentSlide}
            </>
            }
          </>
        }
      </div>
    </>
  )
}
