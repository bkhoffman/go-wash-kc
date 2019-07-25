import React, { Component } from 'react';
import { connect } from 'react-redux'
import API from "../utils/API";
import { removeItem,addQuantity,subtractQuantity} from '../Components/actions/cartActions'
// import Calendar from './Calendar'

import { Input, FormBtn } from "../Components/Form";

import DatePicker from 'react-datepicker';
// import setMinutes from 'date-fns/setMinutes'
// import setHours from 'date-fns/setHours'

import "react-datepicker/dist/react-datepicker.css";

class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }

    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date()
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
        userName: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        email: ""
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
    //Checkout button
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("whats up hommies")
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
   
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img"> 
                                <img src={item.img} alt={item.img} className=""/>
                            </div>
                        
                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p> 
                                <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                            </div>
                                    
                        </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
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
            </div>
            <form className="appointmentForm">
            <div>
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
                />
            </div>
                <Input
                    value={this.state.firstName}
                    // onChange={this.handleInputChange}
                    name="firstName"
                    placeholder="First Name (required)"
                />
                <Input
                    value={this.state.lastName}
                    // onChange={this.handleInputChange}
                    name="lastName"
                    placeholder="Last Name (required)"
                />
                <Input
                    value={this.state.carMake}
                    // onChange={this.handleInputChange}
                    name="carMake"
                    placeholder="Car Make (required)"
                />
                <Input
                    value={this.state.carModel}
                    // onChange={this.handleInputChange}
                    name="carModel"
                    placeholder="Car Model (required)"
                />
                <Input
                    value={this.state.userLicencePlate}
                    // onChange={this.handleInputChange}
                    name="licence"
                    placeholder="Licence Plate Number (required)"
                />
                <Input
                    value={this.state.userLocation}
                    onChange={this.handleInputChange}
                    name="location"
                    placeholder="Location of Service (required)"
                /> 
                <button className="waves-effect waves-light btn checkout">Checkout</button>
                {/* <FormBtn
                    disabled={!(this.state.userName && this.state.password)}
                    onClick={this.handleFormSubmit}
                >
                    Create Account
                </FormBtn> */}
            </form>
            {/* <Calendar /> */}
        </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
