'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Todo = require('../model/Todo');
const router = express.Router();

router.route('/')
  .post((req, res) => {

    const todo = new Todo(req.body);

    todo.save((err, todo) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(todo);
    //   res.json({ message: 'To do saved! '});
    });
    
  });

module.exports = router;