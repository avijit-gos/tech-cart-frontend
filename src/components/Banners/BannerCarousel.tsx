/** @format */

import { useBanner } from "@/base/hooks/useBanner";
import CarouselComp from "../Carousel/CarouselComp";
import BannerLoader from "../Loaders/BannerLoader";
import Errors from "../Errors/Errors";

const BannerCarousel = () => {
  const { loading, banners, error } = useBanner();

  if (loading) return <BannerLoader />;

  if (error) return <Errors error={error} />;

  if (banners) return <CarouselComp banners={banners} />;
};

export default BannerCarousel;
