import dotenv from 'dotenv';
import cors from 'cors';
import express, {urlencoded} from 'express';
import pokeRouter from './router/pokeRouter.js';
const app = express();
 
dotenv.config();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(urlencoded({extended: true}));
app.use("/pokemon",pokeRouter);

app.listen(port,() => console.log(`get ready to fight on ${port}`));