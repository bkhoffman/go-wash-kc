// import React, { Component } from 'react';
// import API from "../../utils/API";
// import { Input, FormBtn } from "../Form";
// import DatePicker from 'react-datepicker';
// // import setMinutes from 'date-fns/setMinutes'
// // import setHours from 'date-fns/setHours'

// import "react-datepicker/dist/react-datepicker.css";
// constructor(props) {
//     super(props);
//     this.state = {
//       startDate: new Date()
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(date) {
//     this.setState({
//       startDate: date
//     });
// }

// const Calendar = () =>{

//   return(
//     <div>
//       <DatePicker 
//           placeholderText="Click to schedule"
//           selected={this.state.startDate}
//           // onSelect={this.handleSelect}
//           onChange={this.handleChange}
//           showTimeSelect
//           // minTime={setHours(setMinutes(new Date(), 0),8)}
//           // maxTime={setHours(setMinutes(new Date(), 0), 16)}
//           timeFormat="p"
//           timeIntervals={60}
//           dateFormat="MMMM d, yyyy h:mm aa"
//           timeCaption="Time"
//       />
//     </div>
//   )
// }

//<form className="appointmentForm">
//                        <Input
//                            value={this.state.firstName}
//                            // onChange={this.handleInputChange}
//                            name="firstName"
//                            placeholder="First Name (required)"
//                        />
//                        <Input
//                            value={this.state.lastName}
//                            // onChange={this.handleInputChange}
//                            name="lastName"
//                            placeholder="Last Name (required)"
//                        />
//                        <Input
//                            value={this.state.carMake}
//                            // onChange={this.handleInputChange}
//                            name="carMake"
//                            placeholder="Car Make (required)"
//                        />
//                        <Input
//                            value={this.state.carModel}
//                            // onChange={this.handleInputChange}
//                            name="carModel"
//                            placeholder="Car Model (required)"
//                        />
//                        <Input
//                            value={this.state.userLicencePlate}
//                            // onChange={this.handleInputChange}
//                            name="licence"
//                            placeholder="Licence Plate Number (required)"
//                        />
//                        <Input
//                            value={this.state.userLocation}
//                            onChange={this.handleInputChange}
//                            name="location"
//                            placeholder="Location of Service (required)"
//                        /> */}
//                        {/* <FormBtn
//                            disabled={!(this.state.userName && this.state.password)}
//                            onClick={this.handleFormSubmit}
//                        >
//                            Create Account
//                        </FormBtn> */}
//                    {/* </form> */}
//
//// export default Calendar;