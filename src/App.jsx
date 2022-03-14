import React, { useState } from 'react';
import { Context } from './components/Context.js';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import AuthPage from './pages/AuthPage';
import AdminMenuPage from './pages/AdminMenuPage';
import AdminStaffPage from './pages/AdminStaffPage';
import AdminOrderPage from './pages/AdminOrderPage';
import UserOrderPage from './pages/UserOrderPage';

const App = () => {
  const [context, setContext] = useState({});
  return (
    <Context.Provider value={[context, setContext]}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AuthPage />} />
          <Route path="admin/menu" element={<AdminMenuPage />} />
          <Route path="admin/staff" element={<AdminStaffPage />} />
          <Route path="admin/order" element={<AdminOrderPage />} />
          <Route path="user/order" element={<UserOrderPage />} />

        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;