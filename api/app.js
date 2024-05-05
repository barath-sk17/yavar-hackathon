import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes';
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000', // Change to your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // HTTP methods you permit
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // If you need to allow cookies or sessions
  }));
  

routes(app);

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Server ready at http://localhost:${port}`));