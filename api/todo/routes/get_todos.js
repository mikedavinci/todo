'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Todo = require('../model/Todo');
const router = express.Router();

router.route('/')
  .get((req, res) => {

    Todo.find({}, (err, todos) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(todos);
    });
    
  });

module.exports = router;