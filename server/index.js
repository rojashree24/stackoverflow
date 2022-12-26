// //uf we use type -> module in package.json , use import otherwise use const
// import express from 'express'
// import mongoose from 'mongoose'
// import cors from 'cors' //use to eliminate issues

// import userRoute from './routes/users.js'
// import questionRoute from './routes/Questions.js'
// import answerRoute from './routes/Answers.js'

// mongoose.set('strictQuery', true);

// //creating server
// const app=express();
// app.use(express.json({limit:"30mb",extended:true}))
// app.use(express.urlencoded({limit:"30mb",extended:true}))
// app.use(cors())

// app.get('/',(req,res)=>{
//     res.send("This is a stackoverflow clone API")
// })

// app.use('/user',userRoute)
// app.use('/questions',questionRoute)
// app.use('/answer',answerRoute)

// const PORT=process.env.PORT || 5000;

// const CONNECTION_URL="mongodb+srv://Rojashreecse:stack123@cluster0.ilgenlz.mongodb.net/myDb?retryWrites=true&w=majority"

// mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
// .then(()=> app.listen(PORT,()=>{console.log(`Running in the port ${PORT}`)}))
// .catch((err)=>console.log(err.message))

// // app.listen(PORT,()=>{
// //     console.log(`Running in the port ${PORT}`);
// // })

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a stack overflow clone API");
});

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

const PORT = process.env.PORT || 5000;

const DATABASE_URL= process.env.CONNECTION_URL;

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Running in the port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
