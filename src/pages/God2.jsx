import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";

const Godleveldemon = () => {
  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchPages = async (startPage, endPage) => {
    setLoading(true);
    setError(null);

    try {
      for (let page = startPage; page <= endPage; page++) {
        const response = await axios.get(
          `${process.env.REACT_APP_APIURL}/novel/${page}`
        );
        setResData((prevData) => [...prevData, response.data]);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchNext10Pages = () => {
    const startPage = pageNumber * 10 + 1;
    const endPage = startPage + 9;

    // Clear the last 10 pages before fetching new ones
    const updatedResData = resData.slice(0, resData.length - 10);

    setResData(updatedResData);
    fetchPages(startPage, endPage);
    setPageNumber((prevPage) => prevPage + 1);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Button variant="contained" onClick={fetchNext10Pages}>
        Fetch Next 10 Pages
      </Button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {resData.map((data, index) => (
        <p key={index}>{data.message}</p>
      ))}
    </Box>
  );
};

export default Godleveldemon;
