/** @format */

import type { IAppState } from "@/base/interface/app/App";
import { create } from "zustand";

export const appStore = create<IAppState>((set) => ({
  pageType: "",
  setPageType: (pageType: string) => set({ pageType }),
}));
