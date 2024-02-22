import axios from "axios";
import { useEffect, useState } from "react"

type Resprops = {
  id: string
  image: {
    small: string
  }
  market_data: {
    current_price: {
      usd: string
    }
  },
}

const useAxios = (param: string) => {
  const [response, setResponse] = useState<Resprops | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>('');

  axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

  const fetchData = async (param: string) => {
    try {
        setLoading(true);
      const result = await axios(param);
      setResponse(result.data);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return {
    response, loading, error
  }
}

export default useAxios