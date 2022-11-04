import express from 'express';
import httpErrorMiddleware from './middlewares/error.middleware';
import router from './routers/router';

const app = express();

app.use(express.json());

app.use(router);

app.use(httpErrorMiddleware);

export default app;
