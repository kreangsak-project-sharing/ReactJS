import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, useTheme } from "@mui/material";

import ResponsiveAppBar from "../components/ResponsiveAppBar";

const Layout = () => {
  const theme = useTheme();

  return (
    <Box sx={{ background: theme.colors.background.default }} height="100vh">
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
