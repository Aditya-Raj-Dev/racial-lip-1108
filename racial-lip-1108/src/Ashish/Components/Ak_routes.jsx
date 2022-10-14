import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Ak_card from './Ak_card';
import Ak_layout from './Ak_layout';
import "./ashish.css"
function Ak_routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Ak_layout />} />

        <Route path="/ak_data/:id" element={<Ak_card />} />
      </Routes>
    </div>
  );
}

export default Ak_routes;
