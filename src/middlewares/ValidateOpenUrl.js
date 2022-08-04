import connection from "../database/database.js";

export async function ValidateOpenUrl(req, res, next) {
    try {
        const { shortUrl } = req.params;

        const { rows: urlRows } = await connection.query(`SELECT id, url, "visitsCount"
        FROM urls
        WHERE "shortUrl"=$1`, [shortUrl]);

        if (!urlRows[0]) return res.sendStatus(404);

        const { id, url: longUrl, visitsCount } = urlRows[0];
        res.locals.id = id;
        res.locals.longUrl = longUrl;
        res.locals.visitsCount = visitsCount;

        next()
    } catch (error) {
        console.error(error);
    }
}