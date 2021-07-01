const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./routes');
const sequelize = require('./config/connection');

const exphbs = require('express-handlebars');

// const helpers = require('./utils/helpers');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 8888;
const hbs = exphbs.create({});

const sess = {
    secret: 'Shh a really big secret',
    cookie: {},
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}! YAY!`));
});
