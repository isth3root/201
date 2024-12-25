import { Router } from "express";
import {
  createTodo,
  getAllTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todos.js";

const router = Router();

router.post("/new", createTodo);
router.get("/", getAllTodo);
router.delete("/delete", deleteTodo);
router.put("/update", updateTodo);

export default router;
