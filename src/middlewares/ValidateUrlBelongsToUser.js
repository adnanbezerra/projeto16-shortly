import connection from "../database/database.js";

export async function ValidateUrlBelongsToUser(req, res, next) {
    try {
        const userId = res.locals.userId;
        const urlId = parseInt(req.params.id);

        const { rows: infoRows } = await connection.query(`
            SELECT * FROM urls WHERE "userId"=$1 AND id=$2
            `, [userId, urlId]);

        if(!infoRows[0]) return res.sendStatus(401);
        next();

    } catch (error) {
        console.error(error);
    }
}