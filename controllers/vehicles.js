const db = require('../models');

module.exports = {
    create: function(req, res) {
        console.log(req.body);
        db.vehicle
            .create(req.body)
            .then(v => {
                v.setUser(req.body.userId);
                res.json(v);
            })
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.vehicle
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.vehicle
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};