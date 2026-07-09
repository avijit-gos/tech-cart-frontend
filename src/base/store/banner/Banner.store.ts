/** @format */

import type { IBanner } from "../../interface/banner/banner.interface";
import { create } from "zustand";

interface IBannerStore {
  banners: IBanner[];
  setBanners: (data: IBanner[]) => void;
}

export const useBannerStore = create<IBannerStore>((set) => ({
  banners: [],
  setBanners: (data: IBanner[]) => set({ banners: data }),
}));
