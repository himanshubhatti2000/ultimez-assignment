import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, isLoading: !data && !error };
};

export default useFetch;
