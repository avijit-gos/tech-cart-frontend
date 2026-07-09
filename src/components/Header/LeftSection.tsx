/** @format */

import useScroll from "@/base/hooks/useScroll";
import Logo from "../../../public/Logo.svg";

const LeftSection = () => {
  const { isScrolled } = useScroll();
  return (
    <div className='flex items-center'>
      <img
        src={Logo}
        alt='WEBSITE_LOGO'
        loading='lazy'
        className='w-6.25 h-6.25 mr-2.5'
      />

      <p
        className={
          isScrolled
            ? "font-(--font-yuyu) text-amber-50"
            : "font-(--font-yuyu) text-(--primary-color)"
        }>
        {import.meta.env.VITE_APP_NAME}
      </p>
    </div>
  );
};

export default LeftSection;
