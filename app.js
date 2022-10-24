const express = require('express');
const port = 8000;
const app = express();

const db = require('./configs/mongoose');

const expressLayouts = require('express-ejs-layouts');


const sassMiddleWare = require('node-sass-middleware');
const path = require('path');


// SCSS
app.use(sassMiddleWare({
    src: path.join(__dirname, './assets', 'sass'),
    dest: path.join(__dirname, './assets', 'css'),
    debug: true,
    outputStyle: 'expanded',
    prefix: '/css'
}));

app.use('/public', express.static(path.join(__dirname, 'public')));

// Static Files
app.use(express.static(path.join(__dirname, './assets')));
app.use(express.urlencoded());
app.use(express.json());

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// EJS Layouts
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Router
app.use('/', require('./router'));

// Starter
app.listen(port, function(err) {
    if(err) {
        console.log(`err at loading application`);
    }
    console.log(`Server is running at port ${port}`);
});