import axios from "axios";
// import { func } from "prop-types";

const USER_KEY = 'user';

export default {
    // saves user locally
    localSetUser: function(user) {
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    },
    // Gets locally saved user
    localGetUser: function() {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    },
    // Gets the user with the given id
    getUser: function(user) {
        return axios.post("./api/v1/auth/login", user);
    },
    loginUser: function(user) {
        return axios.post("./api/v1/auth/", user);
    },
    loadCartUser: function(user) {
        return axios.post("./api/v1/auth/cart", user);
    },
    // Saves a user to the database
    saveUser: function(user, vehicle) {
        return axios.post("./api/v1/auth/signup", user, vehicle);
    },
    // Saves vehicle information to database
    saveVehicle: function(vehicle, user) {
        return axios.post("./api/v1/vehicle/cart", vehicle, user);
    },
    // Saves product information to database
    saveProduct: function() {
        return axios.post("./api/v1/products/cart")
    },
    getProduct: function(user) {
        return axios.get("./api/v1/products/", user)
    }
};