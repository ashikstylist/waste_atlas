const express = require("express");
const router = express.Router();
const Geomodel = require('../models/geo');

router.get("/", (req, res) => { 
    Geomodel.find()
        .then(Coord => res.json(Coord))
        .catch(err => res.status(400).res.json('Error: '.err));
});

module.exports = router;