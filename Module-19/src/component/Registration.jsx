import React from "react";
import { Col, Form, FormGroup, Input, Row } from "reactstrap";
const Registration = () => {
  return (
    <div className="container w-75 mt-5 pb-4">
      <div className="row justify-content-center">
        <h1 className="text-center">Registration</h1>
        <div className="col-md-6 border p-4 shadow">
          <Form>
            <Row>
              <Col>
                <FormGroup className="pt-2">
                  <Input
                    id="username"
                    name="username"
                    placeholder="Username"
                    type="name"
                  />
                </FormGroup>
                <FormGroup className="pt-2">
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                </FormGroup>
                <FormGroup className="pt-2">
                  <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                </FormGroup>
             
              </Col>
            </Row>
            <br />
            <button className="btn btn-primary py-2 px-3">Register</button>
          </Form>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Registration;
