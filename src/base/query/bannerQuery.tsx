/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
import { fetchBanners } from "../api/fetchBanners";
import type { IBanner } from "../interface/banner/banner.interface";

interface BannerState {
  loading: boolean;
  data: IBanner[];
  error: string | null;
  message: string;
}

export const useBannerQuery = () => {
  const [state, setState] = useState<BannerState>({
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
        const response = await fetchBanners();

        setState({
          loading: false,
          data: response.banners,
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
