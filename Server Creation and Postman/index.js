const express = require('express');
const path = require('path')

const app = express();

/*--------------------------------*/

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.get('/', ( req, res ) => {
    res.render('index', {
        title: 'Welcome To Home Page..'          
    });
});

app.get('/page1', ( req, res ) => {
    res.render('page1', {
        title: 'Welcome to Page Two..!!'
    });
});

app.listen(3000, () => console.log("Server is started...!!") );

