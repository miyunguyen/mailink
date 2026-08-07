import express from 'express';
import 'dotenv/config';

import { globalResponseHeaders } from './middlewares/cors.middleware.js';
import { errorHandler } from './middlewares/error.middleware.js';

import urlRoute from './routes/urls.routes.js';

const app = express();

// Parse JSON body
app.use(express.json());

// Static page
app.use(express.static('public'));

// CORS
app.use(globalResponseHeaders);

// Routing
app.use('/', urlRoute);

// Middleware
app.use(errorHandler);

export default app;
