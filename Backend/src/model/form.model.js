const { Schema, model } = require("mongoose");

const formSchema = new Schema(
  {
    name: { type: String, require: true },
    url: { type: String, require: true },
    content: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("form", formSchema);
