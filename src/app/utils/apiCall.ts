import axios, { Method } from 'axios';

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/';

interface Props {
  method: Method;
  url: string;
  data?: any;
}

const apiCall = ({ method, url, data }: Props) => {
  return axios({
    method,
    url,
    data,
  });
};

export default apiCall;
