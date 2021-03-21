import express, { Request, Response } from 'express';
import cors from 'cors';
import { PORT } from './config/constants';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req: Request, res: Response) => {
    res.send({message: 'Hello World'});
});

app.listen(PORT);