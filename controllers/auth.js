const db = require('../models');
const generateHash = require('../config/hash');

module.exports = {
    create: function(req, res) {
        const user = {
            ...req.body,
            password: generateHash(req.body.password)
        };
        db.Users
            .findOrCreate({
                where: {
                    userName: req.body.userName
                },
                defaults: user
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Users
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Users
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },



    // Consider adding this to a products.js file in the controllers folder 

    // findAll: function(req, res) {
    //     db.products
    //         .find(req.query)
    //         .sort({ date: -1 })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // findById: function(req, res) {
    //     db.products
    //         .findById(req.params.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // create: function(req, res) {
    //     db.products
    //         .create(req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // update: function(req, res) {
    //     db.products
    //         .findOneAndUpdate({ _id: req.params.id }, req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // remove: function(req, res) {
    //     db.products
    //         .findById({ _id: req.params.id })
    //         .then(dbModel => dbModel.remove())
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // }
};


// const login = async(req, res) => {
//     res.json(req.user);
// };

// const signup = async(req, res) => {
//     res.json(req.user);
// };

// exports.login = login;
// exports.signup = signup;