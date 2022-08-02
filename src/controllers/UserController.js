import connection from "../database/database.js";

export async function postSignup(req, res) {
    try {
        const { name, email, password } = req.body;

        await connection.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, password]);

        res.sendStatus(201);
    } catch (error) {
        console.error(error);
    }
}

export async function postSignin(req, res) {

}

export async function getUsersMe(req, res) {

}

export async function getRanking(req, res) {

}