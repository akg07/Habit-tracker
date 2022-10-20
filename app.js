const express = require('express');
const port = 8000;
const app = express();

const expressLayouts = require('express-ejs-layouts');


const sassMiddleWare = require('node-sass-middleware');
const path = require('path');


app.use(express.urlencoded());

app.use(sassMiddleWare({
    src: path.join(__dirname, './assets', 'scss'),
    dest: path.join(__dirname, './assets', 'css'),
    debug: true,
    outputStyle: 'expanded',
    prefix: '/css'
}));


app.use(expressLayouts);


app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.use(express.static(path.join(__dirname, './assets')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/', require('./router'));

app.listen(port, function(err) {
    if(err) {
        console.log(`err at loading application`);
    }
    console.log(`Server is running at port ${port}`);
});