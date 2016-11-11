'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Todo = require('../model/Todo');
const router = express.Router();

router.route('/:id')
  .delete((req, res) => {

    const _id = req.params.id;

    Todo.findOneAndRemove({ _id }, (err, todo) => {
      if (err) {
        res.status(400).json(err);
      }
      if (!todo) {
        res.status(404).json({ message: 'To do not found.' });
      }
      res.json({ message: `To do ${todo._id} deleted.` });
    });

  });

module.exports = router;