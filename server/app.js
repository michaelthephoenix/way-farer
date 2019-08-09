import express from 'express';
import router from './routes/tripRoutes';
import userRoutes from './routes/userRoutes';
import bodyParser from 'body-parser';
import bookingsRoutes from './routes/bookRoutes';


const app = express();
app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());

app.use(userRoutes);
app.use(bookingsRoutes);
app.use(router);
app.use(express.json());

const port = process.env.PORT || 7000
app.listen(port, () => {
  console.log(`running on port ${port}`);
});


export default app;