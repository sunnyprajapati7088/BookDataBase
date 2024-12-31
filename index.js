const express = require('express')
const mongoose = require("mongoose");
const app = express();
app.use(express.json())
const router = require("./routes/studentRoute")
const bookrouter = require("./routes/bookRoute");
const dotenv = require('dotenv')
dotenv.config();    
app.use("/book", bookrouter);
const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URL).then(()=>console.log('DataBase Connected')).catch((err)=>{console.error(err);});
app.listen(PORT,()=>{console.log(`server running port ${PORT}`)})


