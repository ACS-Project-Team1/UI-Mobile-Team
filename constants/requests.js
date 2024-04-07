import axios from 'axios';

const token = () =>{

  return localStorage.getItem("token")
}

export const DEFAULT_HEADERS = {
  headers: {
    'Authorization': `Bearer ${token()}`,
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

  static getAuthenticated(url){
  
    return axios.get(url, {  headers: {
      'Authorization': `Bearer ${token()}`,
      'Content-Type': 'application/json',
    },})
  }

  static patch(url, data, response) {
    return axios.patch(url, data, response);
  }
}

export default BaseRequest;