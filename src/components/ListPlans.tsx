import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useListPlans } from '../services/hooks';
import { PLAN } from '../services/types';
import { CardPlan } from './';

interface Props {
  controlStep: (value:number) => void
  setDataPlan: (data:PLAN) => void
  birthDay: string | null,
  selectedOption: number | null
}

export const ListPlans:React.FC<Props> = ({controlStep, setDataPlan, birthDay, selectedOption}) => {
  const { getListPets, plans, loading } = useListPlans()  // plan original
  const [ isElderly, setIsElderly] = useState<number | null>(null)
  const [ plansFiltered, setPlansFiltered] = useState<PLAN[] | null>(null) // plan filtrado por la edad
  const [ plansReduce, setPlansReduce] = useState<PLAN[] | null>(null) // plan filtrado por precios luego de edad
  const [ plansCarousel, setPlansCarousel] = useState<PLAN[] | null>(null) // plan que se renderiza
  const [ isFinishValidPlanes , setIsFinishValidPlanes ] = useState(false)

  useEffect(() => {
    awaitGetListPets()
    debugger;
    if(birthDay){
      toggleBirthDayUser(birthDay)
      validPlanesAge()
    }
  }, [])

  useEffect(() => {
    validPlanesAge()
  }, [plans])

  const awaitGetListPets = async() => {
    await getListPets()
  }

  useEffect(() => {
    // validamos por la edad - 1er paso
    // señalamos que ya se valido por la edad
    if(plans && plans.length>0){
      setIsFinishValidPlanes(true)
      debugger;
      if(plansFiltered){
        setPlansReduce(
          plansFiltered.map(plan => ({
            ...plan,
            price: plan.price * 0.95
          }))
        )
      }
    }
  }, [plansFiltered])

  useEffect(() => {
    if(isFinishValidPlanes){
      if(selectedOption === 2 && plansFiltered){
        setPlansCarousel(plansReduce)
      }
      if(selectedOption === 1){
        setPlansCarousel(plansFiltered)
      }
    }
  }, [selectedOption, isFinishValidPlanes])

  const toggleBirthDayUser = (date:string) => {
    const birthDay = date

    // Creamos un objeto Date con la fecha de nacimiento
    const birthDateParts = birthDay.split("-");
    const birthDate = new Date(+birthDateParts[2], +birthDateParts[1] - 1, +birthDateParts[0]);

    // Obtenemos la fecha actual
    const currentDate = new Date();

    // Calculamos la diferencia en años entre la fecha actual y la fecha de nacimiento
    let age = currentDate.getFullYear() - birthDate.getFullYear()
    const m = currentDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
      age--; 
    }
    setIsElderly(age)
  }

  const validPlanesAge = () => {
    if(plans && isElderly){
      const validPlans = plans.filter(plan => plan.age <= isElderly);
      console.log('validPlans', validPlans)
      if(validPlans){
        setPlansFiltered(validPlans)
        setPlansReduce(validPlans)
      }
    }
  }

  const nextSummary = (value:number,data:PLAN) =>{
    controlStep(value)
    setDataPlan(data)
  }

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
      items:  1.2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.1,
    }
  };

  const responsiveLow = {
    desktopLarge: {
      breakpoint: { max: 6000, min: 1024 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 1024, min: 730 },
      items: 2
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
      items: 1.1,
    }
  };

  return (
    <>
      <div className={`w-full
          ${(plansCarousel && plansCarousel.length>=2) ? 'lg:max-w-[600px] lg:mx-auto' : ''}
        `}>
        {loading ?
          <div className='flex justify-center'>
            <img src="/img/loading-gif.gif" alt="Loading" />
          </div>
          :
          <>
            {!plansCarousel ?
            <div className='text-center mt-8'>No tienes planes registradas por el momento</div>
            :
            <>
              <Carousel
                arrows={true}
                responsive={plansCarousel.length>2 ? responsive : responsiveLow} 
                infinite={false} 
                itemClass="px-2 py-6"
                dotListClass="mb-[-4px]"
                renderArrowsWhenDisabled={true}
                centerMode={false}
                removeArrowOnDeviceType={plansCarousel.length<=2 ? ["mobile", "tablet", "tabletLG", "desktop", "desktopLarge"] : []}
              >
              {
                plansCarousel?.map((item, key) => (
                  <CardPlan data={item} key={key} nextSummary={nextSummary}/>
                ))
              }
              </Carousel>
            </>
            }
          </>
        }
      </div>
    </>
  )
}
