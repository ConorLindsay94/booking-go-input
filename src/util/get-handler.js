import axios from 'axios';
import config from '../config/config.json';

export default async (endpoint, params) => {
  let url = `https://cors.io/?http${config.https ? 's' : ''}://${config.hostname}/${endpoint}`;

  if (params) {
    let paramString = '?';
    Object.keys(params).forEach((key) => {
      paramString += `${key}=${params[key]}&`;
    });
    url += paramString;
  }

  const response = await axios({
    url,
    method: 'get',
  });

  return response.data;
};
