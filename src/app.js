require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const apiRouter = require('./routes/api.router');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();
const { PORT } = process.env;

const sessionConfig = {
  name: 'cooks',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Mellon',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 1000 * 60 * 60,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.cwd(), 'public')));

// const indexRouter = require('./routes/indexRouter');
// const regRouter = require('./routes/reg.router');
// const apiRouter = require('./routers/api-router');

// app.use('/', indexRouter);
// app.use('/register', regRouter);

app.use('/', apiRouter);

app.listen(PORT, () => console.log(`Сервер запущен: http://localhost:${PORT}`));
