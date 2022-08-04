import connection from "../database/database.js";

export async function ValidateUrlIdExistance(req, res, next) {
    try {
        const id = parseInt(req.params.id);

        const { rows: urlRows } = await connection.query(`SELECT id, "shortUrl", url FROM urls WHERE id=$1`, [id]);
        if(!urlRows[0]) return res.sendStatus(404);

        res.locals.urlInfo = urlRows[0];
        next();

    } catch (error) {
        console.error(error);
    }
}