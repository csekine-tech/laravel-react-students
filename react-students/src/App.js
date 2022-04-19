import React ,{ useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Addstudent, StudentsList, Editstudent} from './pages/index';


const App = () => {

  return (
    //v6からRouts,element必須、exact不要
      <Router>
          <Routes>
              <Route path="/" element={<StudentsList/>}/>
              <Route path="/add-student" element={<Addstudent/>}/>
              <Route path="/edit-student/:id" element={<Editstudent/>}/>
          </Routes>
      </Router>
  );
}

export default App;
