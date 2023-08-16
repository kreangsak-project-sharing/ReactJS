import { useEffect } from "react";
import axios from "axios";

const FetchNovel = ({ pageNumber, setLoading, setError, setResData }) => {
  useEffect(() => {
    const fetchData = async () => {
      // Reset error state before fetching
      setError(null);

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_APIURL}/novel/${pageNumber}`
        );
        setResData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageNumber, setLoading, setError, setResData]);

  return null;
};

export default FetchNovel;
