import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Pending from './Pending';
import Status from './Status';
import NotFound from './NotFound'; 

const AppRouter = () => {
  return (
    <Router basename="/admin">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/pending" element={<Pending />} />
        <Route path="/admin/status" element={<Status />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

export default AppRouter;
