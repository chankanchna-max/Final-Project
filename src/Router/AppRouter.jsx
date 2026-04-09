import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import Cinemas from "../Page/Cinemas";
import Fb from "../Page/Fb";
import Offers from "../Page/Offers";
import Coming from "../Page/Coming";
import Detail from "../Page/Detail";
import ComDetail from "../Page/ComDetail";
import ProDetail from "../Page/ProDetail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="cinemas" element={<Cinemas />} />
        <Route path="offers" element={<Offers />} />
        <Route path="fb" element={<Fb />} />
        <Route path="coming" element={<Coming />} />

        <Route path="detail/:id" element={<Detail />} />
        <Route path="comdetail/:id" element={<ComDetail />} />
        <Route path="prodetail/:id" element={<ProDetail />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
