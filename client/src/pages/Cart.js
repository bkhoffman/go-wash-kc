import React, { Component } from 'react';
import { connect } from 'react-redux'
import API from "../utils/API";

// /Users/Brad/git/go-wash-kc/client/src/index.css
import { removeItem } from '../Components/actions/cartActions'
//{ removeItem,addQuantity,subtractQuantity}**removed from line above if we need to add back
// import Calendar from './Calendar'
import { Input, FormBtn } from "../Components/Form";
//date picker css and packages
import DatePicker from 'react-datepicker';
import { setMinutes, setHours } from 'date-fns'
import "react-datepicker/dist/react-datepicker.css";

class Cart extends Component {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }

    constructor(props) {
        super(props);
        this.state = {
            startDate: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    //form info
    state = {
        // User: [],
        firstName: "",
        lastName: "",
        carMake: "",
        carModel: "",
        licence: "",
        location: ""
    };

    componentDidMount() {
        this.loadUser();
    }

    loadUser = () => {
        API.getUser()
            .then(res => this.setState({ User: res.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //Checkout button
    handleCheckoutSubmit = event => {
        event.preventDefault();
        console.log("whats up hommies")
        if (this.state.userName && this.state.password) {
            API.saveUser({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                carMake: this.state.carMake,
                carModel: this.state.carModel,
                licence: this.state.licence,
                location: this.state.location
            })
                .then(res => this.loadUser())
                .catch(err => console.log(err));
        }
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
                <p>No packages selected</p>
            )
        return (
            <div className="container">
                <div className="cart">
                    <h5>Your packages:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                    <div>
                        <span className="collection-item"><b>Total: ${this.props.total} </b></span>
                        <br></br>
                    </div>
                    <br></br>
                    <button className="waves-effect waves-light btn schedule" onClick={() => { this.showFunction() }}>Schedule Appointment</button>
                    <br></br><br></br>
                    <div className="collection" id="appointment" display = "none">
                        <form className="appointmentForm">
                            <div className = "datePicker">
                            <DatePicker
                                placeholderText="     Click to Schedule"
                                selected={this.state.startDate}
                                // onSelect={this.handleSelect}
                                onChange={this.handleChange}
                                showTimeSelect
                                minTime={setHours(setMinutes(new Date(), 0),8)}
                                maxTime={setHours(setMinutes(new Date(), 0), 16)}
                                timeFormat="p"
                                timeIntervals={60}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                timeCaption="Time"
                                className="calBorder"
                            />
                            </div>
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
                                value={this.state.carMake}
                                onChange={this.handleInputChange}
                                name="carMake"
                                placeholder="Car Make (required)"
                            />
                            <Input
                                value={this.state.carModel}
                                onChange={this.handleInputChange}
                                name="carModel"
                                placeholder="Car Model (required)"
                            />
                            <Input
                                value={this.state.userLicencePlate}
                                onChange={this.handleInputChange}
                                name="licence"
                                placeholder="Licence Plate Number (required)"
                            />
                            <Input
                                value={this.state.userLocation}
                                onChange={this.handleInputChange}
                                name="location"
                                placeholder="Location of Service (required)"
                            />
                            <FormBtn className="waves-effect waves-light btn checkout" 
                                disabled={!(
                                    this.state.firstName && 
                                    this.state.lastName &&
                                    this.state.carMake &&
                                    this.state.carModel &&
                                    this.state.licence &&
                                    this.state.location
                                    )}
                                onClick={this.handleCheckoutSubmit}>Checkout
                            </FormBtn>
                        </form>
                    </div>
                </div>
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
