import express from "express";
import {} from '../middlewares/auth.js';
import { login, register } from '../controllers/authController.js';

export const authRoutes = express.Router();

// @route   POST api/v1/auth/login
// @desc    Login user and return JWT token
// @access  Public
authRoutes.post("/login", login);

// @route   POST api/v1/auth/register
// @desc    Register a new user
// @access  Public
authRoutes.post("/register", register);