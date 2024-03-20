import './App.css';
import React  from 'react';
import { Button ,Container,Row,Col} from 'reactstrap';
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from 'react-toastify';
import Home from './Componets/Home';
import Course from './Componets/Course';
import Allcourses from './Componets/Allcourses';
import AddCourse from './Componets/AddCourse';
import Header from "./Componets/Header"
import Menus from './Componets/Menus';
import {BrowserRouter, Routes, Route} from "react-router-dom"
 
function App() {

// const btnHandle=()=>{
// toast.success("done",{
//   position: "top-center"
// });
// };

  return (
  <div>
    
   <BrowserRouter>
  
   <ToastContainer />
    {/* <Home/>
    <Allcourses/>
    <AddCourse/> */}
    <Container>
      <Header/>
      <Row>
        <Col md={4}>
<Menus/>
        </Col>
        <Col md={8}>
        <Routes>   
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/add-course" element={<AddCourse />}></Route>
        <Route exact path="/view-course" element={<Allcourses />}></Route>
        <Route exact path="/add-course" element={<AddCourse />}></Route> 
        {/* <Route exact path="/hgfhf" element={<About />}></Route> 
        <Route exact path="/jhgjgj" element={<Contact />}></Route>  */}

                 
        </Routes>
          
        </Col>
      </Row>
    </Container>
   
   </BrowserRouter>
   
   
  </div>
  );
}

export default App;
