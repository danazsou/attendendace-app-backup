
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { userRouter } from './routes/adminusers.js';
import { rosterRouter } from './routes/roster.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

//routes
app.use('/auth', userRouter);
app.use('/roster', rosterRouter);

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3001, () => console.log('SERVER STARTED ON PORT 3001!!'));


// import express from 'express'; //make sure to add  "type": "module" in package json for this notation
// import cors from 'cors';
// import mongoose from 'mongoose';

// import {userRouter} from './routes/adminusers.js';
// import {rosterRouter} from './routes/roster.js';


// const app = express();

// app.use(express.json()); //to get data from frontend
// app.use(cors());


// //routes
// app.use("/auth", userRouter);
// app.use("/roster", rosterRouter);


// mongoose.connect(
   
   
//     "mongodb+srv://danasou:summer18@attendance.w6srb6x.mongodb.net/?retryWrites=true&w=majority",
//         {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         }
//     )

// app.listen(3001,() => console.log("SERVER STARTED ON PORT 3001!!"));