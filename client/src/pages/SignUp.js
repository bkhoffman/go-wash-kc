import React, { Component } from 'react';
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import Axios from 'axios';

class SignUp extends Component {
    state = {
        // User: [],
        userName: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        email: "",
        signedUp: false
      };

      componentDidMount() {
        this.loadUser();
      }
      
      loadUser = () => {
        API.getUser()
          .then(res => this.setState({ User: res.data}))
          .catch(err => console.log(err));
      };
      
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        console.log('signUpForm, userName')
        if (this.state.userName && this.state.password) {
          API.saveUser({
            userName: this.state.userName,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phone: this.state.phone,
            email: this.state.email

          })
            .then(res => this.loadUser())
            .catch(err => console.log(err));
        }
      };

      loadPage = () => {
        signedUp = true
      }
    
      render() {

        if (signedUp) {
          return <Redirect to = "/" />;
        }
        return (
                <form className="signUpForm">
                  <Input
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                    name="userName"
                    placeholder="Username (required)"
                  />
                  <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="Password (required)"
                  />
                  <Input
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    name="firstName"
                    placeholder="First Name (required)"
                  />
                  <Input
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    name="lastName"
                    placeholder="Last Name (required)"
                  />
                  <Input
                    value={this.state.address}
                    onChange={this.handleInputChange}
                    name="address"
                    placeholder="Full Address"
                  />
                  <Input
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    name="phone"
                    placeholder="Phone Number"
                  />
                  <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email"
                  />               
                  <FormBtn
                    disabled={!(this.state.userName && this.state.password)}
                    onClick={this.handleFormSubmit}
                  >
                    Create Account
                  </FormBtn>
                </form>
        );
      }
}

export default SignUp;