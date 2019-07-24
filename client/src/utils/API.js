import axios from "axios";

export default {
    // loads users
    loadUser: function(userName) {
        return axios.get("/api/v1/auth/login/" + userName);
    },
    // Gets the user with the given id
    getUser: function(userName) {
        return axios.post("./api/v1/auth/signup/" + userName);
    },
    // Saves a user to the database
    saveUser: function(User) {
        return axios.post("./api/v1/auth/signup", User);
    }
};