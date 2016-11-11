'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');

const mongodbUri = 'mongodb://mikedavinci:mikedavinci1@ds151117.mlab.com:51117/todo'
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/todo', require('./api/todo/routes/post_todo'));
app.use('/api/todo', require('./api/todo/routes/get_todos'));
app.use('/api/todo', require('./api/todo/routes/get_todo'));
app.use('/api/todo', require('./api/todo/routes/delete_todo'));
app.use('/api/todo', require('./api/todo/routes/put_todo'));

let contacts = require('./data');

const hostname = 'localhost';
const port = 3001;

const server = app.listen(port, hostname, () => {

    mongoose.connect(mongooseUri, dbOptions, (err) => {
        if (err) {
            console.log(err);
        }
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});
