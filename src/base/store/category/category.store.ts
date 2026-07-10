/** @format */

import type { ICategory } from "@/base/interface/category/category.interface";
import { create } from "zustand";

type ICategoryStore = {
  categories: ICategory[];
  setCategories: (data: ICategory[]) => void;
};

export const useCategoryStore = create<ICategoryStore>((set) => ({
  categories: [],
  setCategories: (value) => set({ categories: value }),
}));
