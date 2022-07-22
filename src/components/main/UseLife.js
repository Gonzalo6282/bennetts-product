import { useEffect, useState } from "react";
import axios from "axios";

function useLife(url) {
  const [data2, setData2] = useState(null);
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState(null);

  useEffect(() => {
    setLoading2(true);
    axios
      .get(url)
      .then((response) => {
        setData2(response.data);
      })
      .catch((err) => {
        setError2(err);
      })
      .finally(() => {
        setLoading2(false);
      });
  }, [url]);

  const refetch = () => {
    setLoading2(true);
    axios
      .get(url)
      .then((response) => {
        setData2(response.data);
      })
      .catch((err) => {
        setError2(err);
      })
      .finally(() => {
        setLoading2(false);
      });
  };

  return { data2, loading2, error2, refetch };
}

export default useLife;