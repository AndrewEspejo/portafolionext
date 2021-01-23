import React from 'react';
import { Description1 } from './works/Description1';
import { Work1 } from './works/Work1';
import { useInView } from 'react-intersection-observer';

export const Projects = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div
      className='h-screen'
      style={{
        background: `${'#050C1C'}`,
      }}
    >
      <section>
        <h1 className='text-3xl text-center pt-8 text-white'>What do I?</h1>
        <div ref={ref}>
          {inView ? (
            <div className='flex flex-row justify-between items-center container px-10 mx-auto pt-24'>
              <Work1 />
              <Description1 />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </div>
  );
};
