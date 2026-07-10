/** @format */

import { Button } from "@/components/ui/button";
import NotFoundImage from "../../assets/notfound.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const naviagate = useNavigate();
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <section className='w-1/2 h-72 bg-gray-200/40 rounded-md p-3 flex items-center'>
        <img src={NotFoundImage} className='w-60 h-60' />
        <section>
          <p className='text-3xl font-stretch-semi-condensed font-semibold text-gray-500 mb-3 animate-pulse'>
            Opps! Page not found
          </p>
          <Button
            className='w-full h-12 bg-(--primary-color) hover:bg-(--primary-hover-color) cursor-pointer'
            onClick={() => naviagate("/")}>
            Go Back
          </Button>
        </section>
      </section>
    </div>
  );
};

export default NotFound;
