import axios from "axios";
import { LISTPLANS } from "../types";

const BASE_API = import.meta.env.VITE_BASE_API;

export async function GetPlansApi(): Promise<LISTPLANS | null> {
  return axios.get(`${BASE_API}/plans.json`)
  .then((response)=>{
    return response.data;
  })
  .catch((error)=>{
    throw error
  })
}