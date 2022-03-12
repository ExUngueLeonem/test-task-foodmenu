import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AuthPage from './pages/AuthPage';
import AdminMenuPage from './pages/AdminMenuPage';
import AdminStaffPage from './pages/AdminStaffPage';
import AdminOrderPage from './pages/AdminOrderPage';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AuthPage />} />
        <Route path="admin/menu" element={<AdminMenuPage/>}/>
        <Route path="admin/staff" element={<AdminStaffPage/>}/>
        <Route path="admin/order" element={<AdminOrderPage/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;