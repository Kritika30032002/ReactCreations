import axios from 'axios';
import { useEffect, useState } from 'react'

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoaded(true);
        const response = await axios(url);
        setData(response.data);
      } catch(error) {
        setError(error);
      } finally {
        setLoaded(false);
      }
    }
    fetchData();

  }, [url]);

  return [data, error, loaded]
}

export default useAxios