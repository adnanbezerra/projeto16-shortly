import connection from "../database/database.js";
import { nanoid } from 'nanoid';

export async function postUrlShorten(req, res) {
    try {
        const { url } = req.body;
        const shortUrl = nanoid()
        const userId = res.locals.id;

        await connection.query(`
        INSERT INTO 
        urls ("shortUrl", url, "userId")
        VALUES ($1, $2, $3)`, [shortUrl, url, userId]
        );

        res.status(201).send(shortUrl);

    } catch (error) {
        console.error(error);
    };
}

export async function getUrlById(req, res) {
    try {
        const urlInfo = res.locals.urlInfo;

        res.status(200).send(urlInfo);
    } catch (error) {
        console.error(error);
    };
}

export async function openShortUrl(req, res) {
    try {
        const longUrl = res.locals.longUrl;
        const id = res.locals.id;
        const newCount = res.locals.visitsCount + 1;

        console.log(`url: ${longUrl}, id: ${id}, newCount: ${newCount}`);

        await connection.query(`UPDATE urls
            SET "visitsCount"=$1 
            WHERE id=$2`, [newCount, id]);

        res.redirect(longUrl);
    } catch (error) {
        console.error(error);
    }
}

export async function deleteUrlById(req, res) {

}