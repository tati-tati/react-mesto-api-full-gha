const express = require('express');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const cors = require('cors');


const errorHandler = require('./middlewares/errorHandlers');

const router = require('./routes/index');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  family: 4,
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const corsOptions = {
  origin: 'https://mesto.tati-tati.nomoredomains.work',
  credentials: true,
};
app.use(cors(corsOptions));

app.use(limiter);
app.use(helmet());
app.disable('x-powered-by');

app.use(express.json());
app.use(cookieParser());

app.use(requestLogger);
app.use(router);

app.use(errors()); // обработчик ошибок celebrate
app.use(errorHandler);
app.use(errorLogger);

app.listen(PORT, () => {
  console.log('Сервер работает');
});
