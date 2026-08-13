import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';

import { globalResponseHeaders } from './middlewares/cors.middleware.js';
import { errorHandler } from './middlewares/error.middleware.js';

import urlRoute from './routes/urls.routes.js';

const app = express();

// Parse JSON body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static page
app.use(express.static('public'));

// CORS
app.use(globalResponseHeaders);

// Routing
app.use('/', urlRoute);

// Middleware
app.use(errorHandler);

export default app;
