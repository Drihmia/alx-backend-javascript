import Express from 'express';
import mapingRoutes from './routes/index';

const app = Express();

const port = 1245;

mapingRoutes(app);

app.listen(port);

export default app;
