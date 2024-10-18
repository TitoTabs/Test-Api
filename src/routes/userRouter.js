import express from "express";
import UserController from "../controller/userController.js";

const api = express();
const controller = UserController();

api.post("/register", controller.register);

export default api;
