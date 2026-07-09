/** @format */

import { appStore } from "@/base/store/app/App.store";
import { useLayoutEffect } from "react";
import AuthModal from "@/components/modals/AuthModalComp";
import BannerCarousel from "@/components/Banners/BannerCarousel";

const Home = () => {
  const { setPageType } = appStore();

  useLayoutEffect(() => setPageType("home"), [setPageType]);
  return (
    <div className='w-full h-auto pt-16'>
      <AuthModal size='md' showCloseButton={true} />
      <section className='w-full aspect-1920/650 overflow-hidden'>
        <BannerCarousel />
      </section>
      <h4>Product category Section</h4>
      <h4>Upcoming Items</h4>
      <h4>Last view Items</h4>
      <h4>Footer</h4>
    </div>
  );
};

export default Home;
