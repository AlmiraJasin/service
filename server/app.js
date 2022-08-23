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
    database: "service",
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

// shop
app.post("/admin/shops", (req, res) => {
    const sql = `
    INSERT INTO shops
    (shop_name, address)
    VALUES (?, ?)
    `;
    con.query(sql, [req.body.shopName, req.body.shopAddress], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'New shop has been added', type: 'success' } });
    });
});

app.get("/admin/shops", (req, res) => {
    const sql = `
  SELECT *
  FROM shops
  ORDER BY shop_name
`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.delete("/admin/shops/:id", (req, res) => {
    const sql = `
    DELETE FROM shops
    WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Cat gone', type: 'success' } });
    });
});

/* app.put("/admin/shops/:id", (req, res) => {
    const sql = `
    UPDATE shops
    SET title = ?
    WHERE id = ?
    `;
    con.query(sql, [req.body.title, req.params.id], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Cat updated. Now it is as new', type: 'success' } });
    });
}); */

//servicemen 

app.post("/admin/servicemen", (req, res) => {
    const sql = `
    INSERT INTO servicemen
    (name, surname, specialty, shop_id)
    VALUES (?, ?, ?, ?)
    `;
    con.query(sql, [req.body.servicemanName, req.body.servicemanSurname, req.body.setServicemanSpecialty, req.body.shop], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'New serviceman has been added', type: 'success' } });
    });
});




app.listen(port, () => {
    console.log(`Server running on port ${port} `);
});