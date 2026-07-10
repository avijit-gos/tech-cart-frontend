/** @format */

import { useState, useEffect } from "react";
import type { ICategory } from "../interface/category/category.interface";
import { fetchCategories } from "../api/fetchCategory";
import axios from "axios";

interface CategoryState {
  loading: boolean;
  data: ICategory[];
  error: string | null;
  message: string;
}

export const useCatgeoryQuery = () => {
  const [state, setState] = useState<CategoryState>({
    loading: false,
    data: [],
    error: null,
    message: "",
  });

  useEffect(() => {
    const load = async () => {
      setState((prev) => ({
        ...prev,
        loading: true,
        error: null,
      }));

      try {
        const response = await fetchCategories();

        setState({
          loading: false,
          data: response.categories,
          message: response.message,
          error: null,
        });
      } catch (error) {
        let message = "Something went wrong";

        if (axios.isAxiosError(error)) {
          message = error.response?.data?.error?.message ?? error.message;
        }

        setState({
          loading: false,
          data: [],
          message: "",
          error: message,
        });
      }
    };

    load();
  }, []);

  return state;
};
