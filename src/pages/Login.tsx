import React from 'react'
import { IconArrowBotton, IconCheckWhite } from '../icons'
import * as Checkbox from '@radix-ui/react-checkbox';
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";

interface Values {
  dni: string;
  phone: string;
}

const SignupSchema = Yup.object().shape({
  dni: Yup.number()
    .required('Este campo es obligatorio'),
  phone: Yup.number()
  .required('Este campo es obligatorio'),
});

export const Login:React.FC = () => {
  return (
    <>
      <div className='text-[1rem] text-black flex items-center gap-4 pb-6 mb-6 border-sold border-b-[1px] border-[#CCD1EE]'>
        <div>
          <span className='text-[.75em] font-bold bg-gradient-to-r from-[#00f4e2] to-[#00ff7f] p-1 px-2 rounded'>Seguro Salud Flexible</span>
          <h1 className='text-[1.75em] mt-[.4em] text-balance font-bold leading-[1.1em]'>Creado para ti y tu familia</h1>
        </div>
        <img loading='lazy' src="/img/login-family.webp" alt="Familia" />
      </div>
      <p className='text-[.875em] font-bold leading-[1.2em] text-balance mb-4 flex items-center justify-between pr-3'>
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.
      </p>
      <Formik
        initialValues={{
          dni: '',
          phone: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={async (
          values: Values,
          { resetForm }
        ) => {
          try{
            const response = await loginAuthApi(values)
            if(response && response.access){
              navigate("/dashboard")
            resetForm();
            }
          }catch(error){
            console.log(error)
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='border-solid border-[1px] border-violet2 rounded-[10px] flex items-center h-[56px] mb-4'>
              <p className='p-[.98em] w-[120px] border-solid border-r-[1px] border-violet2 flex items-center justify-between'>
                DNI
                <IconArrowBotton/>
              </p>
              <div className='flex flex-col px-[1em]'>
                <label className='text-[.75em] text-violet' htmlFor="dni">Nro. de documento</label>
                <Field 
                  id="dni"
                  name="dni"
                  placeholder='Ingrese su DNI' 
                  className='outline-none'
                  type="number"
                />
              </div>
            </div>
            <div className='border-solid border-[1px] border-violet2 rounded-[10px] flex items-center h-[56px] mb-4'>
              <div className='flex flex-col px-3'>
                <label className='text-[.75em] text-violet' htmlFor="dni">Celular</label>
                <Field 
                  id="phone"
                  name="phone"
                  placeholder='Ingrese su número' 
                  className='outline-none'
                  type="number"
                />
              </div>
            </div>
            <div className="flex items-center mb-3">
              <Checkbox.Root
                className="hover:bg-violet3 flex h-[16px] w-[16px] appearance-none items-center justify-center rounded-[4px] bg-black"
                defaultChecked
                id="c1"
              >
                <Checkbox.Indicator className="text-black">
                  <IconCheckWhite/>
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className="pl-[10px] text-[.75em] leading-[1.5em]" htmlFor="c1">
                Acepto la Política de Privacidad
              </label>
            </div>
            <div className="flex items-center mb-4">
              <Checkbox.Root
                className="hover:bg-violet3 flex h-[16px] w-[16px] appearance-none items-center justify-center rounded-[4px] bg-black"
                defaultChecked
                id="c2"
              >
                <Checkbox.Indicator className="text-black">
                  <IconCheckWhite/>
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className="pl-[10px] text-[.75em] leading-[1.5em]" htmlFor="c2">
                Acepto la Política Comunicaciones <br /> Comerciales
              </label>
            </div>
            <p className='text-[.75rem] underline mb-4 font-bold'>Aplican Términos y Condiciones.</p>
            <button type='submit' className='bg-black rounded-[30px] text-white w-full h-[56px]'>
              Cotiza aquí
            </button>
          </Form>
          )}
      </Formik> 
    </>
  )
}
