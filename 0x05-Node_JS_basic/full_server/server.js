import Express from 'express';
import router from './routes';

const app = Express();

const port = 1245;

app.use('/', router);

app.listen(port);

export default app;
