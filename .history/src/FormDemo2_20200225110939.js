import React, { Component } from "react";
import alertify from "alertifyjs";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!", 2);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="pasword"
              name="pasword"
              id="pasword"
              placeholder="Enter pasword"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="descriotion">Description</Label>
            <Input
              type="description"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button>Save</Button>
        </Form>
      </div>
    );
  }
}
