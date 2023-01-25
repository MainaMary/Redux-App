import axios from "axios";
export const baseUrl = axios.create({
    baseURL: 'https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/users'
  });