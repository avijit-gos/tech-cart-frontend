/** @format */

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { IBanner } from "@/base/interface/banner/banner.interface";
import { VITE_IMAGE_URL } from "@/constants";

interface BannerCarouselProps {
  banners: IBanner[];
  autoPlay?: boolean;
  interval?: number;
}

const CarouselComp = ({
  banners,
  autoPlay = true,
  interval = 5000,
}: BannerCarouselProps) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    if (!autoPlay || banners.length <= 1) return;

    const timer = setInterval(next, interval);

    return () => clearInterval(timer);
  }, [current, autoPlay, interval, banners.length]);

  if (!banners.length) return null;

  return (
    <section className='relative  w-full overflow-hidden rounded-xl border '>
      <div
        className='flex h-full transition-transform duration-700 ease-in-out'
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}>
        {banners.map((banner) => (
          <div key={banner._id} className='min-w-full h-full'>
            <img
              src={`${VITE_IMAGE_URL}${banner.image}`}
              alt='Banner'
              className='h-full w-full object-contain'
            />
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white'>
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white'>
        <ChevronRight />
      </button>

      <div className='absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2'>
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              current === index ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default CarouselComp;
