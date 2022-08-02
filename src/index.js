import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter';
import urlRouter from './routers/urlRouter';

dotenv.config();

// const PORT = process.env.PORT;
const PORT = 5000;

const server = express();
server.use(cors());
server.use(express.json());

// Routers session
server.use(userRouter);
server.use(urlRouter);

server.listen(PORT, () => {
    console.log("It's alive!");
})