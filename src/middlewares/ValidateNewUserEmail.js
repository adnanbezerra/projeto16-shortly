import connection from "../database/database.js";

export async function ValidateNewUserEmail(req, res, next) {
    const { email } = req.body;

    const isThereSuchEmail = await connection.query(`SELECT email FROM users WHERE email=$1`, [email])
    if(isThereSuchEmail.rows[0]) return res.sendStatus(409);

    next()
}