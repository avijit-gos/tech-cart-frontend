/** @format */

import ErrorImg from "../../../public/error.png";

const Errors = ({ error }: { error: string }) => {
  return (
    <div className='w-full h-full flex items-center justify-center bg-gray-100/10 p-7'>
      <div className='rounded-md bg-gray-200 w-124 h-56 p-3 flex items-center'>
        <img
          src={ErrorImg}
          alt='Error_image'
          loading='lazy'
          className='w-48 h-48'
        />
        <p className='font-bold text-2xl text-gray-700/60'>{error}</p>
      </div>
    </div>
  );
};

export default Errors;
