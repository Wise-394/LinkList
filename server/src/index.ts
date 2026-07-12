import express from 'express';
import { usernameRouter } from './routes/usernameRoutes';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);
app.use(express.json());

app.get('/health', (req, res) => {
  res.send('Hello World');
});
app.use('/username', usernameRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
