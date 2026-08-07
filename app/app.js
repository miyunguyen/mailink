import express from 'express';
import 'dotenv/config';

import { globalResponseHeaders } from './middlewares/cors.middleware.js';
import { errorHandler } from './middlewares/error.middleware.js';

import urlRoute from './routes/urls.routes.js';

const app = express();

// Parse JSON body
app.use(express.json());

// CORS
app.use(globalResponseHeaders);

// Static page
app.use(express.static('public'));

// Routing
app.use('/', urlRoute);

// Middleware
app.use(errorHandler);

export default app;
