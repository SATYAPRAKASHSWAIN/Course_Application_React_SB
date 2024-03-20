import React, { useState, useEffect } from "react";

import Course from "./Course";
import base_url from "./api/bootapi";
import axios from "axios";
import { Button } from "reactstrap";
import { toast } from "react-toastify";

const Allcourses = () => {
  useEffect(() => {
    document.title = "All Course || Learncodewith Durgesh";
  }, []);
  //function to  call server:
  const getAllcoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        //success
        //console.log(response);
        console.log(response.data);
        toast.success("courses has been loaded", {
          position: "bottom-center",
        });
        setCourses(response.data);
      },
      (error) => {
        //for  error
        console.log(error);
        toast.error("something went wrong", {
          position: "bottom-center",
        });
      }
    );
  };
  //calling loading course function
  useEffect(() => {
    getAllcoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([]);

  const updateCoureses = (id) => {
    setCourses(courses.filter((c) => c.id != id));
  };

  // const Allcourses = () => {
  //   useEffect(() => {
  //     document.title = "All Course || Learncodewith Durgesh";
  //   }, []);

  // const getAllcoursesFromServer = () => {
  //   axios.get(`${base_url}/courses`).then(
  //     (response) => {
  //       //success
  //       //console.log(response);
  //       console.log(response.data);
  //       toast.success("courses has been loaded");

  //       setCourses(response.data);
  //     },
  //     (error) => {
  //       //for  error
  //       console.log(error);
  //       toast.error("something went wrong");
  //     }
  //   );
  // };
  // useEffect(() => {
  //   getAllcoursesFromServer();
  // }, []);

  // const [courses, setCourses] = useState([
  //   { title: "Java Courses", description: "this is demo course" },
  //   { title: "Django Courses", description: "this is demo course" },
  //   { title: "Reactjs Courses", description: "this is demo course" },
  // ]);

  return (
    <div>
      <Button
        onClick={() => {
          console.log("text");
        }}
      >
        Text
      </Button>
      <h1>All Courses</h1>
      <p>List of courses are as follows</p>

      {courses.length > 0
        ? courses.map((item) => (
            <Course key={item.id} course={item} update={updateCoureses} />
          ))
        : "No coursess"}
    </div>
    // <div>
    //   <h1>All Courses</h1>
    //   <p>List of courses are as follows</p>
    //   {courses.length > 0
    //     ? courses.map((item) => <Course key={item.id} course={item} />)
    //     : "No courses"}
    // </div>
  );
};
export default Allcourses;
