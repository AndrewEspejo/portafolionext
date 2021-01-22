import content from '../content/index';

export default function Header() {
  return (
    <div
      style={{
        background: `${'#050C1C'}`,
      }}
    >
      <div className='md:flex md:items-center md:justify-between w-10/12 mx-auto py-3 text-white font-sans sm:flex sm:flex-col sm:items-center sm:justify-center md:flex-row  '>
        <h1 className='text-3xl font-bold text-white dark:text-white'>
          {content.nav.logo}{' '}
          <span className='w-3 h-3 bg-red-500 inline-block rounded-full'></span>
        </h1>
        <div className='flex flex-row justify-center items-center '>
          {content.nav.links.map((link, index) => {
            return (
              <span
                className='text-xl mr-4 text-white'
                key={index}
              >
                {link.text}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
