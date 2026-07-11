import express from 'express';
import { usernameRouter } from './routes/usernameRoutes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));

app.get('/health', (req, res) => {
  res.send('Hello World');
});
app.use('/username', usernameRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
