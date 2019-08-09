import express from "express";
import usersController from "../controllers/userController";
const userRoutes = express.Router()
userRoutes.get("/api/v1/users", usersController.getUsers);
userRoutes.post("/api/v1/users", usersController.createUser);
userRoutes.post("/api/v1/users/auth", usersController.userSignIn);
export default userRoutes;