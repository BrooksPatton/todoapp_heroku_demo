'use strict';

const express = require('express');
let router = express.Router();
const pg = require('../db/knex_config.js');

router.post('/v1/items', (req, res, next) => {
  // if the name is greate than 255 characters, then don't do anything
  let name = req.body.name;
  let description = req.body.description;

  if(name.length > 255) {
    return res.redirect('/');
  }

  if(description.length > 255) {
    return res.redirect('/');
  }

  next();
});

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
