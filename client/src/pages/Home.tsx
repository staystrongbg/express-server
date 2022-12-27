import LibImage from '../assets/a-tall-stack-of-many-books-piled-high-world-book-day-pile-of-colorful-books-free-png.png';
const Home = () => {
  return (
    <section className='flex lg:flex-row lg:gap-0 gap-20 flex-col items-center justify-between lg:px-0 px-4 w-full my-16'>
      <div className='flex flex-col gap-10 '>
        <h1 className='xl:text-8xl text-6xl font-bold text-gray-700 leading-relaxed'>
          <span className='text-white bg-blue-500 py-2 px-4 rounded-md'>L</span>
          IBRE
        </h1>

        <p className='max-w-lg text-lg leading-snug '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque placeat
          ex, architecto dolorum commodi, temporibus quibusdam consequatur ea
          qui.
        </p>
      </div>
      <div className='lg:max-w-[600px] max-w-[400px] relative'>
        <img src={LibImage} alt='' />
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full w-full h-full bg-red-300/30 blur-2xl  -skew-x-12 -z-10 ' />
      </div>
    </section>
  );
};

export default Home;
