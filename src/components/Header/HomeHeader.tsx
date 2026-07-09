/** @format */

import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import useScroll from "@/base/hooks/useScroll";
import RightSection from "./RightSection";

const HomeHeader = () => {
  const { isScrolled } = useScroll();

  return (
    <header
      className={`
      fixed
      top-0
      left-1/2
      -translate-x-1/2
      z-50
      flex
      h-16
      items-center
      rounded-2xl
      px-6
      transition-all
      duration-300

      ${
        isScrolled
          ? "w-[90vw] border border-white/10 bg-black/35 shadow-2xl backdrop-blur-xl"
          : "w-screen border border-x-gray-300 rounded-none"
      }
    `}>
      <div className='w-52'>
        <LeftSection />
      </div>

      <MiddleSection />

      <div className='flex w-60 justify-end gap-3'>
        <RightSection />
      </div>
    </header>
  );
};

export default HomeHeader;
