import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";

import Layout from "./layout/Layout";
import Login from "./pages/Login";
import Novel from "./pages/Novel";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route element={<Layout />}>
            <Route index element={<Navigate to="/novel1" replace />} />
            <Route path="/novel1" element={<Novel />} />
            <Route path="/novel2" element={<Novel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
