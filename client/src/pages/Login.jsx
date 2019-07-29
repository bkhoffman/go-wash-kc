import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

class Login extends Component {
  state = {
    email: "",
    password: "",
    loggedIn: false,
    alertmessage: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.getUser({
        email: this.state.email,
        password: this.state.password,
      })
        .then(({ data: user}) => {
          API.localSetUser(user);
          this.setState({
            loggedIn: true,
          })
        })
        .catch((err) => {
          this.alert()
          console.log(err);
        });
    }
  };

  alert = () => {
    this.setState({
      alertmessage: true
    })
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to = "/" />;
    }
    if (this.state.alertmessage) {
      return (
        <form className="loginForm">
          <h3 value={this.state.alertmessage}> Incorrect email or password entered.  Please try again. </h3>
          <Input
            value={this.state.email}
            onChange={this.handleInputChange}
            name="email"
            placeholder="Email (required)"
          />
          <Input
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            placeholder="Password (required)"
          />
          <FormBtn
            disabled={!(this.state.email && this.state.password)}
            onClick={this.handleFormSubmit}
          >
            Log in
          </FormBtn>
        </form>
      );
      }
    return (
      <form className="loginForm">
        <Input
          value={this.state.email}
          onChange={this.handleInputChange}
          name="email"
          placeholder="Email (required)"
        />
        <Input
          value={this.state.password}
          onChange={this.handleInputChange}
          name="password"
          placeholder="Password (required)"
        />
        <FormBtn
          disabled={!(this.state.email && this.state.password)}
          onClick={this.handleFormSubmit}
        >
          Log in
        </FormBtn>
      </form>
    );
  }
}

export default Login;
