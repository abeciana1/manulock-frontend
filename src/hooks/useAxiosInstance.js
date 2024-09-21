import axios from 'axios';
import { useUser } from '@clerk/clerk-react';
import { useEffect, useMemo } from 'react';

const useAxiosInstance = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { user } = useUser();
  // console.log('user', user);

  const axiosInstance = useMemo(() => {
    return axios.create({
      baseURL: backendUrl,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }, [backendUrl]);

  useEffect(() => {
    if (user) {
      const interceptor = axiosInstance.interceptors.request.use((config) => {
        config.headers['Clerk-User-Id'] = user.id;
        return config;
      });
      return () => {
        axiosInstance.interceptors.request.eject(interceptor);
      };
    }
  }, [user, axiosInstance]);

  return axiosInstance;
};

export default useAxiosInstance;
