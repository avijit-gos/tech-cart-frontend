/** @format */

import { useBannerStore } from "../store/banner/Banner.store";
import { useBannerQuery } from "../query/bannerQuery";
import { useEffect } from "react";

export const useBanner = () => {
  const { loading, data, error, message } = useBannerQuery();
  const { banners, setBanners } = useBannerStore();

  useEffect(() => {
    if (data && !error) setBanners(data);
  }, [data, error]);

  return { loading, error, message, banners };
};
