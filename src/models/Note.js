import mongoose from "mongoose";

const { Schema, model } = mongoose;

const noteSchema = new Schema({
  title: { type: String, required: true },
  description: String,
},{
    timestamps:true,
    versionKey:false
});

export default model('Note',noteSchema)