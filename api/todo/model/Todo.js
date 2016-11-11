const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  Description: { type: String, required: true },
  Who: { type: String, required: true },
  Status: { type: String, required: true },
});

module.exports = mongoose.model('Todo', TodoSchema);