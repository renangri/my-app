import React from "react";
import { Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div className="container">
        <div className="row justify-content-center">
          <Form>
            <div className="col-4">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
            </div>
            <div className="col-4">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
