import axios from "axios";

const USER_KEY = 'user';

export default {
    localSetUser: function(user) {
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    },
    localGetUser: function() {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    },
    // // loads user
    // loadUser: function(user) {
    //     return axios.get("./api/v1/auth/signup", user);
    // },
    // Gets the user with the given id
    getUser: function(user) {
        return axios.post("./api/v1/auth/login", user);
    },
    // Saves a user to the database
    saveUser: function(user) {
        return axios.post("./api/v1/auth/signup", user);
    }
};