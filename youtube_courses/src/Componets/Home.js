import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home || Learncodewith Durgesh";
  }, []);
  return (
    <div className="text-center">
      <div className="container">
        <div className="bg-secondary text-black p-5 my-3">
          <h1>Learncodewith Durgesh</h1>
          <p>
            This is develop by satyaprakash for learning purpose.its backend is
            on spring boot and frontend on react js
          </p>

          <Container>
            <Button color="primary" outline>
              Start Using
            </Button>{" "}
          </Container>
        </div>
      </div>
    </div>
  );
};
export default Home;
