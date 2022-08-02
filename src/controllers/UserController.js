import connection from "../database/database.js";
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

export async function postSignup(req, res) {
    try {
        const { name, email, password } = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);

        await connection.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, encryptedPassword]);

        res.sendStatus(201);
    } catch (error) {
        console.error(error);
    }
}

export async function postSignin(req, res) {
    try {
        const token = uuid();

        // const userId = res.locals.id;
        // await connection.query(`INSERT INTO "currentSessions" ("userId", token) VALUES ($1, $2)`, [userId, token]);

        res.status(200).send(token);
    } catch (error) {
        console.error(error)
    }
}

export async function getUsersMe(req, res) {

}

export async function getRanking(req, res) {

}