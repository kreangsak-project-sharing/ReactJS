import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import FetchNovel from "../components/FetchNovel";
import FooterNextPage from "../components/FooterNextPage";

const Novel = () => {
  const location = useLocation();

  // Directly fetch the page number from localStorage during initialization.
  const storedPage = localStorage.getItem(`${location.pathname}/pagesNumber`);
  const [pageInc, setPageInc] = useState(storedPage ? Number(storedPage) : 1);

  const [resdata, setResData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Persist the current page number in localStorage whenever it changes.
    localStorage.setItem(`${location.pathname}/pagesNumber`, pageInc);
  }, [location, pageInc]);

  const increasePage = () => {
    setLoading(true);
    setPageInc((prev) => prev + 1);
  };

  const decreasePage = () => {
    setLoading(true);
    setPageInc((prev) => prev - 1);
  };

  return (
    <Box>
      <FetchNovel
        pageNumber={pageInc}
        setLoading={setLoading}
        setError={setError}
        setResData={setResData}
      />
      {loading && <Box>Loading...</Box>}
      {error && <Box>Error: {error}</Box>}
      {!loading && !error && (
        <Box>
          <Typography fontSize={36} fontWeight={400} letterSpacing={1.5}>
            {resdata?.message}
          </Typography>
        </Box>
      )}
      <FooterNextPage
        pageNumber={pageInc}
        totalPages={resdata?.totalPages}
        increasePage={increasePage}
        decreasePage={decreasePage}
        locationPath={location?.pathname}
      />
    </Box>
  );
};

export default Novel;
