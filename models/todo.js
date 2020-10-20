const { Schema, model } = require("mongoose");

const schema = new Schema();
schema.add({
  title: {
    type: String,
    required: true,
  },
  complited: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Todo", schema);
