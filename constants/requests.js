export const status = {  
  UPCOMING : "Upcoming",  
  PLAYING:"Playing",  
  OVERDUE:"Overdue"  
  }   

export const BASE_URL = "http://ec2-3-19-26-192.us-east-2.compute.amazonaws.com:8080/api"

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