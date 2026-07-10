/** @format */

import type { ICategory } from "@/base/interface/category/category.interface";
import { VITE_IMAGE_URL } from "@/constants";
import { useNavigate } from "react-router-dom";

interface Props {
  category: ICategory;
}

const CategoryCard = ({ category }: Props) => {
  const navigate = useNavigate();
  const handleRedirect = (link: string) => {
    navigate(`/product/${link}`);
  };
  return (
    <div
      onClick={() => handleRedirect(category.link)}
      className='
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-gray-50/70
        backdrop-blur-md
        p-5
        flex
        flex-col
        items-center
        justify-center
        gap-3
        min-h-42.5
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-[0_18px_40px_rgba(41,54,129,0.18),0_4px_12px_rgba(0,0,0,0.08)]
      '>
      {/* Shine Effect */}
      <div
        className='
          pointer-events-none
          absolute
          -left-32
          -top-20
          h-72
          w-20
          rotate-25
          from-transparent
          via-white/60
          to-transparent
          opacity-0
          transition-all
          duration-700
          group-hover:left-[130%]
          group-hover:opacity-100
        '
      />

      {/* Bottom Border */}
      <span
        className='
          absolute
          bottom-0
          left-1/2
          h-0.75
          w-full
          -translate-x-1/2
          scale-x-0
          bg-linear-to-r
          from-(--primary-color)
          to-(--primary-color)
          transition-transform
          duration-300
          origin-center
          group-hover:scale-x-100
        '
      />

      {/* Image Wrapper */}
      <div
        className='
          relative
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:rotate-6
          group-hover:bg-[#293681]/10
          group-hover:border
          group-hover:shadow-[0_0_18px_rgba(41,54,129,0.18)]
        '>
        <img
          src={`${VITE_IMAGE_URL}${category.image}`}
          alt={category.name}
          loading='lazy'
          className='
            h-14
            w-14
            object-contain
            transition-transform
            duration-300
            group-hover:scale-110
          '
        />
      </div>

      {/* Title */}
      <p
        className='
          text-center
          text-sm
          font-semibold
          text-gray-700
          transition-all
          duration-300
          group-hover:-translate-y-0.5
          group-hover:text-(--primary-color)
          group-hover:tracking-wide
        '>
        {category.name}
      </p>
    </div>
  );
};

export default CategoryCard;
