import React, { Component } from 'react';
import { connect } from 'react-redux'
import API from "../utils/API";
import { removeItem } from '../Components/actions/cartActions'
import { Input, FormBtn } from "../Components/Form";
//date picker css and packages
import DatePicker from 'react-datepicker';
import { setMinutes, setHours } from 'date-fns'
import "react-datepicker/dist/react-datepicker.css";

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            User: {},
            startDate: "", 
            vehicleMake: "",
            vehicleModel: "",
            vehicleLicence: "",
            vehicleLocation: "",
        };
        this.handleChange = this.handleChange.bind(this);
        // this.open = false;
    }
    
    handleClose = () => {
        this.setState({
            isOpen: false,
        });
    }
     
    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

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
        console.log("Date " + this.state.startDate)
        //dialog popup
        this.setState({
            isOpen: true,
        });

        if (this.state.userName && this.state.password) {
            API.saveUser({
                startDate: this.state.startDate,
                vehicleMake: this.state.vehicleMake,
                vehicleModel: this.state.vehicleModel,
                vehicleLicence: this.state.vehicleLicence,
                vehicleLocation: this.state.vehicleLocation
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
                    <div id="appointment" display = "none">
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
                                value={this.state.vehicleMake}
                                onChange={this.handleInputChange}
                                name="vehicleMake"
                                placeholder="Vehicle Make (required)"
                            />
                            <Input
                                value={this.state.vehicleModel}
                                onChange={this.handleInputChange}
                                name="vehicleModel"
                                placeholder="Vehicle Model (required)"
                            />
                            <Input
                                value={this.state.vehicleLicence}
                                onChange={this.handleInputChange}
                                name="vehicleLicence"
                                placeholder="Licence Plate Number (required)"
                            />
                            <Input
                                value={this.state.vehicleLocation}
                                onChange={this.handleInputChange}
                                name="vehicleLocation"
                                placeholder="Location of Service (required)"
                            />
                            <FormBtn className="waves-effect waves-light btn checkout" 
                                // disabled={!(
                                //     this.state.vehicleMake &&
                                //     this.state.vehicleModel &&
                                //     this.state.vehicleLicence &&
                                //     this.state.vehicleLocation
                                //     )}
                                onClick={this.handleCheckoutSubmit}>Checkout
                            </FormBtn>
                        </form>
                        <Dialog
                            open={this.state.isOpen}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={this.handleClose}
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle id="alert-dialog-slide-title"><h2>Appointment Confirmed!</h2></DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                <h4>Vehicle Make: {`${this.state.vehicleMake}`}</h4>
                                <h4>Vehicle Model: {`${this.state.vehicleModel}`}</h4>
                                <h4>Vehicle Licence: {`${this.state.vehicleLicence}`}</h4>
                                <h4>Service Location: {`${this.state.vehicleLocation}`}</h4>
                            </DialogContentText>
                            </DialogContent>
                        </Dialog>
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
