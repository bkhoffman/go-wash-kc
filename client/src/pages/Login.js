import React, { Component } from 'react';
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

class Login extends Component {
    state = {
        users: [],
        userName: "",
        password: ""
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
          API.saveUser({
            userName: this.state.userName,
            password: this.state.password,
          })
            .then(res => this.loadUser())
            .catch(err => console.log(err));
        }
      };
    
      render() {
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