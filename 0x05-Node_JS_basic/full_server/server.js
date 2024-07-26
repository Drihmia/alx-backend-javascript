#!/usr/bin/env node
import express from 'express';
import mapingRoutes from './routes/index.js';

const app = express();

const port = 1245;

mapingRoutes(app);

app.listen(port);

export default app;
