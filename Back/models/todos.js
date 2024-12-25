import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  subject: { type: String, required: true },
  isChecked: { type: Boolean, default: false },
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
