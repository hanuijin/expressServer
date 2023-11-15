import express, { Express } from 'express';
import routes from './routes/index';

const app: Express = express();
const port: number = 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
