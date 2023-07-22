import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Aboutus from '../Pages/Aboutus';
import Home from '../Pages/Home';
import Curriculam from '../Pages/Curriculam';
// import Login from '../Pages/Login';
import Admission from '../Pages/Admission';
import AuthContextProvider from '../Context/AuthContextProvider';
function AllRoutes() {
  return (
   
      <div className="AllRoutes">
        <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/curriculam" element={<Curriculam />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/admission" element={<Admission />} />

        </Routes>
        </AuthContextProvider>
      </div>
  );
}

export default AllRoutes;
