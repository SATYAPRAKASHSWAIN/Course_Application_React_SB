import React, { Fragment, useState } from "react";
import { Button, Form, FormGroup, Input, Container } from "reactstrap";

import axios from "axios";
import base_url from "./api/bootapi";
import { toast } from "react-toastify";
const AddCourse = () => {
  const [course, setCourses] = useState({});
  //form handler function
  const handleForm = (e) => {
    console.log(course);
    postDatatoServer(course);

    e.preventDefault();
  };
  //creating function to post data on server
  const postDatatoServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("Course added successfully");
        setCourses({ id: "", title: "", description: "" });
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Error ! Something went wrong");
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Detail</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label for="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourses({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            onChange={(e) => {
              setCourses({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="title">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 100 }}
            onChange={(e) => {
              setCourses({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button
            type="reset"
            color="warning ms-2"
            onClick={() => {
              setCourses({ id: "", title: "", description: "" });
            }}
          >
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
