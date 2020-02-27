
const bodyParser = require('body-parser');
const express = require('express')
const exphbs  = require('express-handlebars');
const db = require("./models/index")
const apiRouter = require('./routes/apiRoutes');
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

 

const hbs = exphbs.create();
 
// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/api', apiRouter);
app.get('/', (req, res) => res.render('home'));

db.sequelize.sync().then(()=>{
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

})



