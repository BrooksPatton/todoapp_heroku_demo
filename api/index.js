'use strict';

const express = require('express');
let router = express.Router();
const pg = require('../db/knex_config.js');

router.post('/v1/items', (req, res, next) =>{
  pg('todo').insert(req.body)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.error('There was a problem inserting into the DB');
      next(err);
    })
});

module.exports = router;
