import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';

export default function Stack() {
  return (
    <div
      className='h-screen flex flex-col items-center justify-center '
      id='stack'
      style={{
        background: `${'linear-gradient(90deg, rgba(216,216,224,1) 0%, rgba(244,244,244,1) 47%, rgba(150,142,144,1) 83%)'}`,
      }}
    >
      <h1 className='text-5xl font-bold text-black'>Stack I use</h1>
      <div className='flex flex-wrap justify-center mt-10'>
        {content.stack.tech.map((tech, index) => {
          return (
            <span
              className={`${
                index !== 1 ? 'animate-float' : 'animate-refloat'
              } ${
                index !== 3 ? 'animate-float' : 'animate-refloat'
              } w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5 `}
              key={index}
            >
              <LazyLoadImage src={tech.img} alt={tech.alt} />
            </span>
          );
        })}
      </div>
      <p className='w-11/12 md:max-w-xl text-center text-xl mt-10 text-black'>
        {content.stack.desc}
      </p>
    </div>
  );
}
