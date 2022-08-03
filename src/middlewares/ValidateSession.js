import connection from "../database/database.js";

export async function ValidateSession(req, res, next) {
    try {
        const { authorization } = req.headers;
        const token = authorization?.replace("Bearer ", "");

        const { rows: sessionRows } = await connection.query(`SELECT id FROM "currentSessions" WHERE token=$1`, [token]);

        const userId = sessionRows[0].id;
        if (!userId) return res.sendStatus(401);

        res.locals.id = parseInt(userId);

        next()

    } catch (error) {
        console.error(error);
    };
}