/** @format */

import type { ICategory } from "../interface/category/category.interface";
import { api } from "./axios";
import { urls } from "@/constants";

interface ICategoryResponse {
  categories: ICategory[];
  message: string;
}

export const fetchCategories = async (): Promise<ICategoryResponse> => {
  const response = await api.get(urls.CATEGORY_ENDPOINT);

  return {
    categories: response.data.categories,
    message: response.data.message,
  };
};
