import React, { useEffect, useState } from "react";
import { Row, Col, Table, Alert, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { createStudent, listStudents } from "../Actions/studentActions";
import { STUDENT_CREATE_RESET } from "../Constants/studentConstants";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const studentList = useSelector((state) => state.studentList);
  const { loading, error, students } = studentList;
  useEffect(() => {
    // dispatch({ type: STUDENT_CREATE_RESET });

    // if(successCreate){
    //   navigate(`/${createdStudent._id}/edit`)
    // } else {
    //   dispatch(listStudents())
    dispatch(listStudents());
  }, [dispatch, listStudents]);

  return (
    <Container className="mt-5">
      <Row className="m-3">
        <Col>
          <h1>Students</h1>
        </Col>
        <Col>
          <Link to={"/add"}>
            <Button>
              <i className="fas fa-plus"></i> Add student
            </Button>
          </Link>
        </Col>
      </Row>
      {/* {loadingDelete && <Loader />}
      {errorDelete && <Alert variant="danger">{errorDelete}</Alert>}
      {loadingCreate && <Loader />}
      {errorCreate && <Alert variant="danger">{errorCreate}</Alert>}
      {loading ? (
        <Loader /> */}
      {/* ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : ( */}

      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>NAME</th>
            <th>DEPARTMENT</th>
            <th>EMAIL</th>
            <th>MOBILE</th>
            <th>ADDRESS</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.map((student) => (
              <tr key={student.ID}>
                <td>{student.Name}</td>
                <td>{student.Dept}</td>
                <td>{student.Email}</td>
                <td>{student.Mobile}</td>
                <td>{student.Address}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default HomeScreen;
