import express, { Request, Response } from 'express';
import cors from 'cors';
import csvtojson from 'csvtojson';
import { PORT } from './config/constants';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    csvtojson().fromFile('students.csv').then(students => {
        res.json(students);
    })
});

app.listen(PORT);