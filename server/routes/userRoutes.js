import express from "express";
import usersController from "../controllers/userController";
const router = express.Router();
router.get("/api/v1/users", usersController.getUsers);
router.post("/api/v1/users", usersController.createUser);
router.get("/api/v1/users/:id", usersController.getOneUser);
router.put("/api/v1/users/:id", usersController.updateUser);
router.delete("/api/v1/users/:id", usersController.deleteUser);
export default router;