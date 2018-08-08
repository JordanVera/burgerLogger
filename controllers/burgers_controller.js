const express = require('express'),
      burgers = require('../models/burger'),
      router = express.Router();


router.get('/api/', function (req, res) {
    burgers.all(function (data) {
        res.json(data);
    });
});

router.get('/', function (req, res) {
    burgers.all(function (data) {
        let hbsObj = {
            burger: data
        };

        res.render('index', hbsObj);
    });
});

router.post('/api/new/burger', function (req, res) {
    let newBurger = req.body.name;

    burgers.create(newBurger, function (data) {
        console.log(data)
        if (data.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.post('/api/update/burger', function (req, res) {
    let burgerId = req.body.id;

    burgers.devour(burgerId, function (data) {
        console.log(data)
        if (data.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router