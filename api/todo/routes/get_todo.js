'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Todo = require('../model/Todo');
const router = express.Router();

router.route('/:id')
  .get((req, res) => {

    const _id = req.params.id;

    Todo.findOne({ _id }, (err, todo) => {
      if (err) {
        res.status(400).json(err);
      }
      if (!todo) {
        res.status(404).json({ message: 'Todo not found.' });
      }

      res.json(todo);
    });
    
  });

module.exports = router;