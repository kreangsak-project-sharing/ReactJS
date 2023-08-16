import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

import ResponsiveAppBar from "../components/ResponsiveAppBar";

const Layout = () => {

  return (
    <Box>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
