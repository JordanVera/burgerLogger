const express = require('express'),
      burger = require('../models/burger'),
      router = express.Router();


router.get('/', function (req, res) {
    burger.all(function (data) {
        let hbsObj = {
            burger: data
        };
        console.log(hbsObj)
        res.render('index', hbsObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
      "buger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burgers/:id", function (req, res) {
    const condition = `id = ${req.params.id}`;

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router