import express from 'express';
import router from './routes/tripRoutes';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());

app.use(router);
app.use(express.json());
app.listen(process.env.PORT || 5000);
console.log("running on port 5000");

export default app;