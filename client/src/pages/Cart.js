import React, { Component } from 'react';
import { connect } from 'react-redux'
import API from "../utils/API";

// /Users/Brad/git/go-wash-kc/client/src/index.css
import { removeItem } from '../components/actions/cartActions'
//{ removeItem,addQuantity,subtractQuantity}**removed from line above if we need to add back
// import Calendar from './Calendar'

import { Input, FormBtn } from "../components/Form";

import DatePicker from 'react-datepicker';
// import setMinutes from 'date-fns/setMinutes'
// import setHours from 'date-fns/setHours'

import "react-datepicker/dist/react-datepicker.css";

class Cart extends Component {

    //form info
    state = {
        firstName: "",
        lastName: "",
        vehicleMake: "",
        vehicleModel: "",
        vehicleLicence: "",
        location: ""
    };

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    // handleChange(date) {
    //     this.setState({
    //         startDate: date
    //     });
    // }


    componentDidMount() {
        API.localGetUser()
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.vehicleLicence, this.state.vehicleMake, this.state.vehicleModel)
            API.saveAppointment({
                // firstName: this.state.firstName,
                // lastName: this.state.lastName,
                vehicleMake: this.state.vehicleMake,
                vehicleModel: this.state.vehicleModel,
                vehicleLicence: this.state.vehicleLicence,
                // location: this.state.location
            })
                .then(console.log("this happened"))
                    // res => this.loadUser())
                .catch(err => console.log(err));
        
    };

    showFunction = () => {
        let x = document.getElementById("appointment");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }


    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (

                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img">
                                <img src={item.img} alt={item.img} className="" />
                            </div>

                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p>
                                <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.id) }}>Remove</button>
                            </div>

                        </li>

                    )
                })
            ) :

            (
                <p>Nothing.</p>
            )
        return (
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                    <div>
                        <span className="collection-item"><b>Total: ${this.props.total} </b></span>
                        <br></br>
                    </div>
                    <br></br>
                    <button className="waves-effect waves-light btn checkout" onClick={() => { this.showFunction() }}>Schedule Appointment</button>
                    <br></br><br></br>
                    <div className="collection" id="appointment" display = "none">
                        <form className="appointmentForm">
                            <div className = "datePicker">
                            <DatePicker
                                placeholderText="Click to schedule"
                                selected={this.state.startDate}
                                // onSelect={this.handleSelect}
                                onChange={this.handleChange}
                                showTimeSelect
                                // minTime={setHours(setMinutes(new Date(), 0),8)}
                                // maxTime={setHours(setMinutes(new Date(), 0), 16)}
                                timeFormat="p"
                                timeIntervals={60}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                timeCaption="Time"
                                className="red-border"
                            />
                            </div>
                            <Input
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                name="firstName"
                                placeholder="First Name (required)"
                            />
                            <Input
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                name="lastName"
                                placeholder="Last Name (required)"
                            />
                            <Input
                                value={this.state.vehicleMake}
                                onChange={this.handleChange}
                                name="vehicleMake"
                                placeholder="Car Make (required)"
                            />
                            <Input
                                value={this.state.vehicleModel}
                                onChange={this.handleChange}
                                name="vehicleModel"
                                placeholder="Car Model (required)"
                            />
                            <Input
                                value={this.state.vehicleLicence}
                                onChange={this.handleChange}
                                name="vehicleLicence"
                                placeholder="Licence Plate Number (required)"
                            />
                            <Input
                                value={this.state.vehicleLocation}
                                onChange={this.handleChange}
                                name="location"
                                placeholder="Location of Service (required)"
                            />
                            <FormBtn 
                                className="waves-effect waves-light btn checkout"
                                onClick={this.handleFormSubmit}
                            >
                                Checkout
                            </FormBtn>
                            {/* 
                            disabled={!(this.state.userName && this.state.password)}
                            
                            >
                                Create Account
                             */}
                        </form>
                    </div>
                </div>
                {/* <Calendar /> */}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        total: state.total
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        // addQuantity: (id)=>{dispatch(addQuantity(id))},
        // subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
