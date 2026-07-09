/** @format */

import { InputInputGroup } from "../InputComp/InputComp";
import Navbar from "../Navbar/Navbar";

const MiddleSection = () => {
  return (
    <div className='flex flex-1 items-center gap-6 px-6'>
      <div className='w-70'>
        <InputInputGroup />
      </div>

      <Navbar />
    </div>
  );
};

export default MiddleSection;
