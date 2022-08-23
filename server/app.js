const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");
app.use(express.json({ limit: '10mb' }));
app.use(cors());
const mysql = require("mysql");
const md5 = require('js-md5');
const uuid = require('uuid');

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gofundme",
});

app.post("/register", (req, res) => {
    if (req.body.password !== req.body.passwordRepeat) {
        res.status(400).send({msg: 'Passwords do not match'})
        return;
    } 
    const sqlUserExist = `
    SELECT
    username
    FROM users
    WHERE username = ?
    `;
    con.query(sqlUserExist, [req.body.username], (err, result) => {
        if (err) throw err;
        if(result.length > 0) {
            res.status(400).send({msg: 'Username already exists'})
            return;
        }
        const sql = `
            INSERT INTO users
            (username, password)
            VALUES (?, ?)
            `;
        con.query(sql, [req.body.username, md5(req.body.password)], (err, result) => {
            if (err) throw err;
            res.send({ result, msg: { text: 'New user has been created', type: 'success' } });
        });
    });
});

app.post("/login", (req, res) => {
    const key = uuid.v4();
    const sql = `
        UPDATE users
        SET session = ?
        WHERE username = ? AND password = ?
        `;
    con.query(sql, [key, req.body.username, md5(req.body.password)], (err, result) => {
        if (err) throw err;
        if (!result.affectedRows) {
            res.send({ msg: 'error', key: '' });
        } else {
            const getLoggedInUserSql = `
            SELECT *
            FROM users
            WHERE username = ?
            `
            con.query(getLoggedInUserSql, [req.body.username], (err, result) => {
                if (err) throw err;
                res.send({ msg: 'ok', key, user: result[0] });
            })
            
        }
    });
});









app.listen(port, () => {
    console.log(`Server running on port ${port} `);
});