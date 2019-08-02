import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from "../utils/API";
import { Input, FormBtn } from "../Components/Form";
import { Link } from 'react-router-dom';

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
        signedUp: false,
        alertmessage: false,
        vehicleMake: "",
        vehicleModel: "",
        vehicleLicense: "",
        userId: ""
      };

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit  = async event => {
        event.preventDefault();
        // console.log('signUpForm, userName')
        if (this.state.userName && this.state.password) {
        try {
          const {data: user} = await API.saveUser({
            userName: this.state.userName,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phone: this.state.phone,
            email: this.state.email
          });

          await API.localSetUser(user);
          this.setState({
            // signedUp: true,
            userId: user.id
          });
          console.log(this.state.userId);
          const vehicle = await API.saveVehicle({
            vehicleMake: this.state.vehicleMake,
            vehicleModel: this.state.vehicleModel,
            vehicleLicense: this.state.vehicleLicense,
            userId: this.state.userId
          })
          if (user && vehicle) {
            window.location.replace('/packages')
          }
        } catch (err) {
          this.alertMsg()
          console.log('err.msg', err.response.data.msg);
        }
        }
      };

      alertMsg = () => {
        this.setState({
          alertmessage: true
        })
      }
    
      render() {
        if (this.state.signedUp) {
          return <Redirect to = "/packages" />;
        }
        if (this.state.alertmessage) {

          return (
            <div>
              <h3 value={this.state.alertmessage}> Email already used. Please login or use a different email. </h3>
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
                <Input
                  value={this.state.vehicleMake}
                  onChange={this.handleInputChange}
                  name="vehicleMake"
                  placeholder="Car Make"
                />
                <Input
                  value={this.state.vehicleModel}
                  onChange={this.handleInputChange}
                  name="vehicleModel"
                  placeholder="Car Model"
                />   
                <Input
                  value={this.state.vehicleLicense}
                  onChange={this.handleInputChange}
                  name="vehicleLicense"
                  placeholder="Car License"
                />                 
                <FormBtn
                  disabled={!(this.state.userName && this.state.password)}
                  onClick={this.handleFormSubmit}
                >
                  Create Account
                </FormBtn>
                <FormBtn><Link to="/Login">Login</Link></FormBtn>
              </form>
            </div>
          );
        }
        return (
              <div>
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
                  <Input
                    value={this.state.vehicleMake}
                    onChange={this.handleInputChange}
                    name="vehicleMake"
                    placeholder="Car Make"
                  />
                  <Input
                    value={this.state.vehicleModel}
                    onChange={this.handleInputChange}
                    name="vehicleModel"
                    placeholder="Car Model"
                  />   
                  <Input
                    value={this.state.vehicleLicense}
                    onChange={this.handleInputChange}
                    name="vehicleLicense"
                    placeholder="Car License"
                  />                 
                  <FormBtn
                    disabled={!(this.state.userName && this.state.password)}
                    onClick={this.handleFormSubmit}
                  >
                    Create Account
                  </FormBtn>
                </form>
              </div>
        );
      }
}

export default SignUp;
