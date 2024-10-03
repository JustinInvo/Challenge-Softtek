import axios from "axios";
import { USER } from "../types";

const BASE_API = import.meta.env.VITE_BASE_API;

export async function loginAuthApi(): Promise<USER | null> {
  return axios.get(`${BASE_API}/user.json`)
  .then((response)=>{
    return response.data;
  })
  .catch((error)=>{
    throw error
  })
}