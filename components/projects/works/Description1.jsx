import React from 'react';
import { useInView } from 'react-intersection-observer';

export const Description1 = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div className='flex flex-col items-center content-center mt-10 bg-white rounded-t-lg rounded-b-xl lg:w-3/12 lg:h-48 transform rotate-12 tilt-in-fwd-tl'>
      <h3 className='w-full text-black text-lg font-semibold font-mono border border-gray-500 rounded-b-none rounded-t-lg py-2 text-center'>
        Electrobobinados Rafa
      </h3>
      <p className='text-black px-5 pt-3 text-lg font-thin '>
        Esta aplicación fue construida para una empresa de Electrobobinados
        ubicada en el municipio de Segovia, Antioquia
      </p>
    </div>
  );
};
