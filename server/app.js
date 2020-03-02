import http from 'http'
import express from 'express'
import cors from 'cors';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';

const hostname = '127.0.0.1';
const app = express()
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the .',
}));

const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`listening on port ${port}...`);
});