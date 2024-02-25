import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sequelize } from '../data/database.js';

const authRouter = express.Router();

// Route for user login
authRouter.post('/login', (req, res, next) => {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    // Query the database to find the user with the provided username
    pool.query('SELECT * FROM users WHERE username = ?', username, (err, results) => {
        if (err) {
            return next(err);
        }

        // Check if user exists
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const user = results[0];

        // Compare password with hashed password stored in the database
        bcrypt.compare(password, user.password, (err, isValid) => {
            if (err) {
                return next(err);
            }

            // If password is not valid, return error
            if (!isValid) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            // Generate JWT token
            const token = jwt.sign({ id: user.id, username: user.username }, 'your_secret_key', { expiresIn: '1h' });

            // Send token in response
            res.json({ token });
        });
    });
});

module.exports = router;
