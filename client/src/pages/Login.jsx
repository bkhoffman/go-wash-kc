import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

class Login extends Component {
  state = {
    userName: "",
    password: "",
    signedUp: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.userName && this.state.password) {
      API.getUser({
        userName: this.state.userName,
        password: this.state.password,
      })
        .then(({ data: user}) => {
          API.localSetUser(user);
          this.setState({
            signedUp: true,
          })
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    if (this.state.signedUp) {
      return <Redirect to = "/" />;
    }

    return (
      <form className="loginForm">
        <Input
          value={this.state.userName}
          onChange={this.handleInputChange}
          name="userName"
          placeholder="UserName (required)"
        />
        <Input
          value={this.state.password}
          onChange={this.handleInputChange}
          name="password"
          placeholder="Password (required)"
        />
        <FormBtn
          disabled={!(this.state.userName && this.state.password)}
          onClick={this.handleFormSubmit}
        >
          Log in
        </FormBtn>
      </form>
    );
  }
}

export default Login;
