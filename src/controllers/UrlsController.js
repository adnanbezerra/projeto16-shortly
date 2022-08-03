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

}

export async function openShortUrl(req, res) {

}

export async function deleteUrlById(req, res) {

}