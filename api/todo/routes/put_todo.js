'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Todo = require('../model/Todo');
const router = express.Router();

router.route('/:id')
  .put((req, res) => {

    const _id = req.params.id;

    Todo.findOneAndUpdate({ _id },
      req.body,
      { new: true },
      (err, todo) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(todo);
    });

  });

module.exports = router;