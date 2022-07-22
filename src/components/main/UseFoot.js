import { useEffect, useState } from "react";
import axios from "axios";

function useFoot(url) {
  const [data1, setData1] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [setError1, setError1setError1] = useState(null);

  useEffect(() => {
    setLoading1(true);
    axios
      .get(url)
      .then((response) => {
        setData1(response.data);
      })
      .catch((err) => {
        setError1setError1(err);
      })
      .finally(() => {
        setLoading1(false);
      });
  }, [url]);

  const refetch = () => {
    setLoading1(true);
    axios
      .get(url)
      .then((response) => {
        setData1(response.data);
      })
      .catch((err) => {
        setError1setError1(err);
      })
      .finally(() => {
        setLoading1(false);
      });
  };

  return { data1, loading1, setError1, refetch };
}

export default useFoot;