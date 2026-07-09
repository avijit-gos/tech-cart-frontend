/** @format */
import type { IBanner } from "../interface/banner/banner.interface";
import { api } from "./axios";
import { urls } from "@/constants";

interface BannerResponse {
  banners: IBanner[];
  message: string;
}

export const fetchBanners = async (): Promise<BannerResponse> => {
  const response = await api.get(urls.BANNER_ENDPOINT);

  return {
    banners: response.data.banners,
    message: response.data.message,
  };
};
