import axios from 'axios';

export const DEFAULT_HEADERS = {
  headers: {
    // 'Authorization': `${token()}`,
    'Content-Type': 'application/json',
  },
};

class BaseRequest {
  static headers() {
    return { headers: DEFAULT_HEADERS };
  }

  static get(url, data) {
    return axios.get(url, data);
  }

  static post(url, data) {
    return axios.post(url, data);
  }

  static postAuthenticated(url, data, headers){
   
    return axios.post(url, data, headers)
  }

  static getAuthenticated(url, headers){
 
    return axios.get(url, headers)
  }

  static patch(url, data, response) {
    return axios.patch(url, data, response);
  }
}

export default BaseRequest;