import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AdminMenuPage from './pages/AdminMenuPage';

import AuthPage from './pages/AuthPage';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AuthPage />} />
        <Route path="admin/menu" element={<AdminMenuPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;