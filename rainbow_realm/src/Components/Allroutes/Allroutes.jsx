import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Aboutus from '../Pages/Aboutus';
import Home from '../Pages/Home';
import Curriculam from '../Pages/Curriculam';
import Course from '../Pages/Course';
import Admission from '../Pages/Admission';
import AuthContextProvider from '../Context/AuthContextProvider';
import SingleSubjectPage from '../Pages/SingleSubjectPage';
function AllRoutes() {
  return (
   
      <div className="AllRoutes">
        <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/curriculam" element={<Curriculam />} />
          <Route path="/course" element={<Course />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/singlepage/:id" element={<SingleSubjectPage/>}/>

        </Routes>
        </AuthContextProvider>
      </div>
  );
}

export default AllRoutes;
