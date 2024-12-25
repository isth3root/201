import Todo from "../models/todos.js";

export const createTodo = async (req, res) => {
  try {
    const { subject } = req.body;


    // ======== fix it

    const todo = new Todo({ subject });

    await todo.save();

    return res.status(201).send(todo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error during create todo" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { todoID } = req.body;

    const todo = await Todo.findById(todoID);
    if (!todo) {
      return res.status(404).json({ message: "Not Found!" });
    }

    todo.isChecked = !todo.isChecked;

    await todo.save();

    return res.status(200).json({ message: "Todo Updated", todo });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error during updating todo" });
  }
};

export const getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find();

    return res.send(todos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error during get todos" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { todoID } = req.body;
    if (!todoID) {
      return res.status(400).json({ message: "Todo ID is required" });
    }

    const todo = await Todo.findByIdAndDelete(todoID);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error deleting todo" });
  }
};
