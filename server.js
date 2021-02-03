const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const cors = require('cors');

const db = knex({
    client: 'pg',
    connection: {
        host: "localhost", //localhost or IP
        user: "postgres", // add your postgres user name 
        password: yourpasswor, // add your password
        database: "menu", // database name is menu
    }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

// imports 
const getuser = require('./routes/get')
const adduser = require('./routes/post')
const deleteuser = require('./routes/delete')

app.get('/user', (req, res) => {
    getuser.showuserdata(req, res, db);
})


app.post('/adduser', (req, res) => {
    adduser.userdata(req, res, db);
})

app.delete('/deleteuser/:user_id', (req, res) => {
    deleteuser.deleteuserdata(req, res, db);
})


app.listen(3005, "192.168.1.xx", () => { //add localhost or IP
    console.log('>> App is running...');

});