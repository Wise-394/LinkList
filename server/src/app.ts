import express from 'express';
import { userRouter } from './routes/userRoute';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);
app.use(express.json());

app.get('/health', (_req, res) => {
  res.send('Hello World');
});
app.use('/user', userRouter);

export default app;
