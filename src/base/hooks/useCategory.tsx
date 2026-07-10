/** @format */

import { useCategoryStore } from "../store/category/category.store";
import { useEffect } from "react";
import { useCatgeoryQuery } from "../query/categoryQuery";

export const useCategory = () => {
  const { categories, setCategories } = useCategoryStore();
  const { loading, data, message, error } = useCatgeoryQuery();

  useEffect(() => {
    if (data && !error) setCategories(data);
  }, [data, error]);

  return { loading, categories, message, error };
};
