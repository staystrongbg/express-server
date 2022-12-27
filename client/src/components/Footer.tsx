const Footer = () => {
  return (
    <footer className='flex items-center justify-between relative w-full pt-8 pb-8 lg:px-0 px-4 border-t my-60 border-gray-300'>
      <p>&copy;devoxDev 2022</p>
      <div className='flex font-black absolute left-1/2 -translate-x-1/2 bg-white z-2 w-[180px] h-[180px] rounded-full -top-[100px] items-center justify-center'>
        <div className='text-8xl font-black text-blue-500'>L</div>
        <div className='flex flex-col text-4xl mt-2 text-gray-700'>
          <div className=''>IBRE</div>
          <div className=''>ibrary</div>
        </div>
      </div>
      <p>Libre</p>
    </footer>
  );
};

export default Footer;
