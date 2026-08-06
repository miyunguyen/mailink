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

// Routing
app.use('/api/urls', urlRoute);

// Middleware
app.use(errorHandler);
app.use(globalResponseHeaders);

export default app;
