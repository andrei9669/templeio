import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRoutes: React.FC = () => (
  <Routes>
    {/* <Route path="/" exact element={<Home />} /> */}
    {/* <Route path="/about" element={<About />} /> */}
    {/* <Route path="/help" element={<Help />} /> */}
    {/* <Route path="/login" element={<LoginContainer />} /> */}
    <Route path="/" element={<>landing</>} />
  </Routes>
);

export default AppRoutes;
