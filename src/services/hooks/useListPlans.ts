import { useState } from "react"
import { GetPlansApi } from "../api/listPlans";
import { PLAN } from "../types";

export const useListPlans = () => {
    const [ loading, setLoading ] = useState(true)
    const [ plans, setPlans ] = useState<PLAN[] | null>(null);
  
    const getListPets = async () => {
      setLoading(true)
      const response = await GetPlansApi()
      if(response) {
        setPlans(response.list)
      }
      setLoading(false)
    }
  
    return {
      loading,
      plans,
      getListPets,
    }
  }