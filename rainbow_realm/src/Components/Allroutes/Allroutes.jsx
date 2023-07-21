import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Aboutus from '../Pages/Aboutus';
import Home from '../Pages/Home';
import Curriculam from '../Pages/Curriculam';
import ContactUs from '../Pages/ContactUs';
import Admission from '../Pages/Admission';
function AllRoutes() {
  return (
    // <BrowserRouter>
      <div className="AllRoutes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/curriculam" element={<Curriculam />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/admission" element={<Admission />} />

        
        </Routes>
      </div>
    // </BrowserRouter>
  );
}

export default AllRoutes;
