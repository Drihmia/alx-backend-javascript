import express from 'express';
import indexRouter from './routes/index';

const app = express();
const port = 1245;

app.use(indexRouter);

app.listen(port);

export default app;
