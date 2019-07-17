import axios from "axios";

export default {
    // loads users
    loadUser: function(id) {
        return axios.get("/api/v1/auth/login/" + id);
    },
    // Gets the user with the given id
    getUser: function(id) {
        return axios.get("./api/v1/auth/signup/" + id);
    },
    // Saves a user to the database
    saveUser: function(User) {
        return axios.post("./api/v1/auth/signup", User);
    }
};