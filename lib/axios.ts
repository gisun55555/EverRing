import axios, { AxiosError, AxiosHeaders } from "axios";
import { getCookie } from "@utils/cookieUtils";
import { TOKEN } from "@constants/auth";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const isServer = typeof window === "undefined";

// eslint-disable-next-line import/prefer-default-export
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  let token;

  if (isServer) {
    const { cookies } = await import("next/headers");
    const cookiesObj = await cookies();
    token = cookiesObj.get(TOKEN)?.value;
  } else {
    token = getCookie(TOKEN);
  }

  if (token) {
    const updatedHeaders = new AxiosHeaders({
      ...config.headers,
      Authorization: `Bearer ${token}`,
    });

    return { ...config, headers: updatedHeaders };
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,

  async (error: AxiosError) => {
    return Promise.reject(error);
  },
);
