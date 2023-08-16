import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";

const Godleveldemon = () => {
  const [userData, setUserdata] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const submitHandle = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_APIURL}/novel/${pageNumber}`
        );
        setUserdata(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    submitHandle();
  }, [pageNumber]);

  const inCreateNumber = () => {
    setPageNumber((pre) => pre + 1);
  };

  return (
    <Box display="flex" justifyContent="center" justifyItems="center">
      <Button variant="contained" onClick={inCreateNumber}>
        Next
      </Button>
      {pageNumber}
      {userData?.message}
    </Box>
  );
};

export default Godleveldemon;
