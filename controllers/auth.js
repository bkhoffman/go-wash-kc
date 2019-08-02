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
                    email: req.body.email
                },
                defaults: user
            })
            .then(dbModel => dbModel[1] ? res.json(dbModel[0]) : res.status(400).json({ msg: 'Email already used', err: null }))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Users
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    login: function(req, res) {
        res.json(req.user);
    },
};