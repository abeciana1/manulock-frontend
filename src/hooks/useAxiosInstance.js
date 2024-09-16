import axios from 'axios';
import { useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';

const useAxiosInstance = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { user } = useUser();
  // const [axiosInstance, setAxiosInstance] = useState(null);
  console.log('user', user);

  const axiosInstance = axios.create({
    baseURL: backendUrl,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  useEffect(() => {
    if (user) {
      axiosInstance.interceptors.request.use((config) => {
        config.headers['Clerk-User-Id'] = user.id;
        return config;
      });
    }
  }, [user]);

  return axiosInstance;
};

export default useAxiosInstance;
