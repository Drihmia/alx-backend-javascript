#!/usr/bin/env node
import Express from 'express';
import mapingRoutes from './routes/index.js';

const app = Express();

const port = 1245;

mapingRoutes(app);

app.listen(port);

export default app;
