import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createStudent } from "../Actions/studentActions";
import { STUDENT_CREATE_RESET } from "../Constants/studentConstants";

const AddStudentScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const studentCreate = useSelector((state) => state.studentCreate);
  const { success } = studentCreate;

  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    dispatch({ type: STUDENT_CREATE_RESET });
    if (success) {
      navigate("/");
    }
  }, [success, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createStudent(name, dept, email, mobile, address));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={12} md={6}>
          <Link to="/" className="btn btn-light my-3">
            Go back
          </Link>
          <h1>Add Student</h1>

          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="dept">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Department"
                value={dept}
                onChange={(e) => setDept(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="mobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddStudentScreen;
