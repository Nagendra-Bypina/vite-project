import React from "react";
import { Button, Form } from "react-bootstrap";
export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      phone: "",
    };
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted", this.state);
  };
  render() {
    return (
      <Form className="form-class" onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={this.state.name}
            name="name"
            onChange={this.handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your phone number"
            value={this.state.phone}
            name="phone"
            onChange={this.handleOnChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
