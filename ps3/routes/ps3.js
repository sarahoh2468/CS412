const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.render('ps3', {'string': req.query.string});
        console.log(req.query.string);
    })
    .post((req, res, next) => {
        res.render('ps3', {'string': req.body.string, 'length': req.body.string.length})
    })
module.exports = router;