import connection from "../database/database.js";

export async function ValidateUserExistance(req, res, next) {
    try {
        const userId = res.locals.userId;

        const { rows: userRows } = await connection.query(`SELECT * FROM users WHERE id=$1`, [userId]);
        if (!userRows[0]) return res.sendStatus(404);

        next();
    } catch (error) {
        console.error(error);
    };
}