import React from 'react'
import { IconArrowBotton } from '../icons'
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";
import { loginAuthApi } from '../services/api/login';
import { useNavigate } from "react-router-dom";
import { useDataUserStore } from '../store';

interface Values {
  dni: string;
  phone: string;
  aceptaPoliticaPrivacidad: boolean;
  aceptaComunicacionesComerciales: boolean;
}

const SignupSchema = Yup.object().shape({
  dni: Yup.number()
    .required('Este campo es obligatorio'),
  phone: Yup.number()
  .required('Este campo es obligatorio'),
  aceptaPoliticaPrivacidad: Yup.bool()
    .required('Debe aceptar la Política de Privacidad')
    .oneOf([true], 'Debe aceptar la Política de Privacidad'),
  aceptaComunicacionesComerciales: Yup.bool()
    .required('Debe aceptar las Comunicaciones Comerciales')
    .oneOf([true], 'Debe aceptar las Comunicaciones Comerciales'),
});

export const Login:React.FC = () => {
  const { setDataUser } = useDataUserStore()
  const navigate = useNavigate();

  return (
    <div className='text-[1rem] max-w-[400px] mx-auto px-4
      lg:flex lg:max-w-full lg:gap-[60px] lg:mt-[40px]
    '>
      <img className='hidden lg:block' loading='lazy' src="/img/login-family-d.webp" alt="Familia" />
      <div className='lg:max-w-[400px]'>
        <div className='text-black flex items-center gap-4 pb-6 mb-6 border-sold border-b-[1px] border-[#CCD1EE]
          lg:pb-0 lg:mb-4 lg:border-b-0
        '>
          <div>
            <span className='text-[.75em] font-bold bg-gradient-to-r from-[#00f4e2] to-[#00ff7f] p-1 px-2 rounded'>Seguro Salud Flexible</span>
            <h1 className='text-[1.75em] mt-[.4em] text-balance font-bold leading-[1.1em]'>
              Creado para ti y tu  
                <br className='hidden lg:block'/> familia
            </h1>
          </div>
          <img className='lg:hidden' loading='lazy' src="/img/login-family-m.webp" alt="Familia" />
        </div>
        <p className='text-[.875em] font-bold leading-[1.2em] text-balance mb-4 flex items-center justify-between pr-3'>
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y 
          <br className='hidden lg:block'/> recibe nuestra asesoría, 100% online.
        </p>
        <Formik
          initialValues={{
            dni: '',
            phone: '',
            aceptaPoliticaPrivacidad: true,
            aceptaComunicacionesComerciales: true,
          }}
          validationSchema={SignupSchema}
          onSubmit={async (
            values: Values,
            { resetForm }
          ) => {
            try{
              console.log('Datos:', values)
              const response = await loginAuthApi()
              if(response) {
                setDataUser(response)
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
              <div className='mb-4'>
                <div className='border-solid border-[1px] border-violet2 rounded-[10px] flex items-center h-[56px]'>
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
                      className='outline-none bg-transparent'
                      type="text"
                    />
                  </div>
                </div>
                {errors.dni && touched.dni && (
                  <div className='text-[#DC143C] mt-1 text-[14px]'>{errors.dni}</div>
                )}
              </div>
              <div className='mb-4'>
                <div className='border-solid border-[1px] border-violet2 rounded-[10px] flex items-center h-[56px]'>
                  <div className='flex flex-col px-3 w-full'>
                    <label className='text-[.75em] text-violet' htmlFor="dni">Celular</label>
                    <Field 
                      id="phone"
                      name="phone"
                      placeholder='Ingrese su número' 
                      className='outline-none bg-transparent'
                      type="text"
                    />
                  </div>
                </div>
                {errors.phone && touched.phone && (
                  <div className='text-[#DC143C] mt-1 text-[14px]'>{errors.phone}</div>
                )}
              </div>
              <div className="checkbox-wrap">
                <Field type="checkbox" id="aceptaPoliticaPrivacidad" name="aceptaPoliticaPrivacidad" />
                <label className="text-[.75em] leading-[1.5em]" htmlFor="aceptaPoliticaPrivacidad">
                  Acepto la Política de Privacidad
                </label>
              </div>
              <div className="checkbox-wrap">
                <Field type="checkbox" id="aceptaComunicacionesComerciales" name="aceptaComunicacionesComerciales"/>
                <label className="text-[.75em] leading-[1.5em]" htmlFor="aceptaComunicacionesComerciales">
                  Acepto la Política Comunicaciones <br /> Comerciales
                </label>
              </div>
              <p className='text-[.75rem] underline mb-4 font-bold'>Aplican Términos y Condiciones.</p>
              <button type='submit' className={`bg-black rounded-[30px] text-white w-full h-[56px]
                lg:w-[195px] lg:font-bold
                ${(errors.aceptaPoliticaPrivacidad && touched.aceptaPoliticaPrivacidad) || (errors.aceptaComunicacionesComerciales && touched.aceptaComunicacionesComerciales) 
                  ? 'disabled opacity-75' : ''}
                `}>
                Cotiza aquí
              </button>
            </Form>
            )}
        </Formik> 
      </div>
    </div>
  )
}
