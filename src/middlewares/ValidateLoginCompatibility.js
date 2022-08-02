import bcrypt from 'bcrypt';
import connection from "../database/database.js";

export async function ValidateLoginCompatibility(req, res, next) {
    const login = req.body;
    const { rows: dataFromDatabase } = await connection.query(`SELECT * FROM users WHERE email=$1`, [login.email]);

    if(!dataFromDatabase[0]) return res.sendStatus(401);

    const userFromDatabase = dataFromDatabase[0];
    res.locals.id = dataFromDatabase[0].id;

    if(!bcrypt.compareSync(login.password, userFromDatabase.password)) return res.sendStatus(401);

    next();
}