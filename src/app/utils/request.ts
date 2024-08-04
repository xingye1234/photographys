import axios, {
  Method,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosProgressEvent,
} from "axios";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css";

interface IResponse{
  message: string;
  data?: any;
  code:number;
}


const request = axios.create({
  // baseURL: "http://localhost:3000",
  timeout: 1000 * 10,
});

request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    NProgress.start();
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response: AxiosResponse<IResponse>) => {
    NProgress.done();
    return response;
  },
  (error) => Promise.reject(error)
);

export const GET = async (url: string) => {
  try {
    const res = await request(url);
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const POST = async (url: string, data: any) => {
  try {
    const res = await request(url, {
      method: "POST",
      data,
    });
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const PUT = async (url: string, data: any) => {
  try {
    const res = await request(url, {
      method: "PUT",
      data,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const DELETE = async (url: string) => {
  try {
    const res = await request(url, {
      method: "DELETE",
    });
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};
