const express= require ('express');


const app = express();
app.use(express.json());
const dotenv = require ('dotenv');
dotenv.config({ path: './config/.env'});


//connecting to database
const connectDB = require('./helpers/connectDB');
connectDB();

//routes
app.use('/api/user', require('./routes/userRoutes'));

const port = process.env.PORT;
app.listen(port, (err) =>
err ? console.log (err): console.log (`server is running on port ${port}`)
);
