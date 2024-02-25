import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { authRoutes } from './routers/authRoutes';
import { studentRoutes } from './routers/studentRoutes';
import { adminRoutes } from './routers/adminRoutes';
import { facultyRoutes } from './routers/facultyRoutes';

export const app = express();

app.use(express.json());
app.use(cookieParser());

config({
    path: "./data/.env"
});

app.use(cors({
    origin: ['https://localhost:5173', 'http://localhost:5174'],
    methods: ['GET', 'POST', 'DELETE', 'UPDATE'],
    credentials: true
}));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/student', studentRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/faculty', facultyRoutes);