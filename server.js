
const bodyParser = require('body-parser');
const express = require('express')
const exphbs  = require('express-handlebars');
const db = require("./models/index")
const apiRouter = require('./routes/apiRoutes');
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

 

const hbs = exphbs.create();
 
// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'))

app.use('/api', apiRouter);
app.get('/', async (req, res) => {
    const burgers = await db.Burger.findAll();
    console.log(burgers)
    res.render('home', {burgers})
});

db.sequelize.sync().then(()=>{
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

})



