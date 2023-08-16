import React from "react";
import { Box, Button, TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const FooterNextPage = ({
  pageNumber,
  totalPages,
  decreasePage,
  increasePage,
  locationPath,
}) => {
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0 && value <= totalPages) {
      localStorage.setItem(`${locationPath}/pagesNumber`, value);
    }
  };

  return (
    <Box
      position="fixed"
      bottom="0"
      right="0"
      zIndex="1000"
      p={1}
      display="flex"
      justifyContent="flex-end"
      // width="100%"
      // flexDirection="column"
      // alignItems="flex-end"
      // gap={2}
      // bgcolor="rgba(255, 255, 255, 0.9)" // Adjust alpha value for transparency
      // boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      // borderRadius="8px 0 0 0"
    >
      <Box display="flex" justifyContent="end" alignContent="center" gap={2} mb={2} mr={2}>
        <Button
          variant="contained"
          size="large"
          onClick={decreasePage}
          disabled={pageNumber <= 1}
        >
          <ArrowBackIosIcon />
          Back
        </Button>
        <Button variant="contained" size="large" disabled>
          Page {pageNumber} of {totalPages}
        </Button>
        <TextField
          id="page-number-input"
          label="Go to Page"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleInputChange}
          inputProps={{
            min: 1,
            max: totalPages,
            step: 1,
          }}
        />
        <Button
          variant="contained"
          size="large"
          onClick={increasePage}
          disabled={pageNumber >= totalPages}
        >
          Next
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default FooterNextPage;
