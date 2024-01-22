import React from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const CheckoutPage = () => {
  return (
    <div className="container">
      <h1 className="text-center ">Checkout</h1>
      <div className="row">
        <div className="col-md-7">
          <h3>Billing Details</h3>
          <Form>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" type="text" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="company">Company Name</Label>
                  <Input id="company" name="company" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="country">Country</Label>
                  <Input id="country" name="country" type="select">
                    <option value="">Select Your Country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Nepal">Nepal</option>
                    <option value="China">China</option>
                    <option value="Bhutan">Bhutan</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="address">Street Address</Label>
                  <Input id="address" name="address" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="town">Town / City</Label>
                  <Input id="town" name="town" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="Phone">Phone</Label>
                  <Input id="Phone" name="Phone" type="text" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input id="email" name="email" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 className="text-dark fw-bold">Additional information</h5>
                <FormGroup>
                  <Label for="order">Order notes</Label>
                  <Input id="order" name="order" type="textarea" rows="7" />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="col-md-5">
          <h3>Your order</h3>
          <div className="bg-body-secondary p-4">
            <div className="d-flex justify-content-between">
              <p className="fw-bold text-dark">Product</p>
              <p className="fw-bold text-dark">Total</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <p>Product Name X 1</p>
              <p>$100</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Product Name X 1</p>
              <p>$100</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <p className="text-dark fw-bold">Shipping</p>
              <p>Free shipping</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <p className="text-dark fw-bold fs-5">Total</p>
              <p className="text-primary fw-bolder">$100</p>
            </div>
            <hr />
            <h5 className="fw-bold text-dark">Direct bank transfer</h5>
            <p className="fs-6">
              Please send a check to Store Name, Store Street, <br />
              Store Town, Store State / County, Store Postcode.
            </p>
          </div>
          <button className="btn btn-primary text-white py-3 mt-2 rounded-1 w-100">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
