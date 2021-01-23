import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content/index';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Typical from 'react-typical';
import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Banner() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div
      className='height-banner flex items-center justify-center'
      style={{
        background: `${'#050C1C'}`,
      }}
    >
      <div className='w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between'>
        <div className='w-full md:w-2/4 rounded-full '>
          <LazyLoadImage
            className='rounded-full'
            src={content.header.img}
            effect='blur'
            placeholderSrc={content.header.placeholder}
          />
        </div>
        <div className='text-white   text-center md:text-left'>
          <h2
            className={`${
              animated ? '' : '-translate-y-10 opacity-0'
            } transform transition duration-1000 ease-in-out text-2xl w-2/4 md:text-4xl font-bold lg:pb-2`}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`${
              animated ? '' : '-translate-y-10 opacity-0'
            } font-bold text-2xl `}
            style={{
              backgroundColor: '#4facfe',
              backgroundImage:
                'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {content.header.text[2]}{' '}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className='inline-block'
            />
          </h1>
          <ScrollLink to='stack' smooth={true}>
            <button
              className=' bg-button_color2 px-10 py-3 text-xl uppercase mt-10 rounded-lg animate-float'
              style={{
                background: `${'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)'}`,
              }}
            >
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
