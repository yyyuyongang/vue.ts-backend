import express, {Application, Request, Response, NextFunction, response} from 'express';
import mongoose from 'mongoose';
import { ArticleSchema } from './article';
import bodyParser = require('body-parser');

const app: Application = express();
const ArticleMongooseModel = mongoose.model('Article', ArticleSchema);

mongoose.connect('mongodb://localhost:27017/nodejs-blog');

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");         
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");         
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});           

app.get('/', (req: Request, res: Response) => {
    res.end('hi');
});

app.get('/articles', (req: Request, res: Response) => {
    ArticleMongooseModel.find({}, (err, data) => {
        if (err){
            res.send(err);
        }
        res.json(data);
    });
});

app.post('/articles', (req: Request, res: Response) => {
    ArticleMongooseModel.insertMany(req.body);
    
});

app.listen(3000, ()=> console.log('Serve runing'));