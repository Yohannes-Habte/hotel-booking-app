import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

/*
    To fetch the data, I will be using axios. 
    So intall (npm install axios) in the terminal of frontend
*/

const UseFetch = (url) => {
  // State variables for fetching data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  // Function to refetch data
  const reFetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return {data, loading, error, reFetch}
};

export default UseFetch;
