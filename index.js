const express = require("express");
const router = require("./ROUTER/routers");
const connectDB = require("./DB");
const cors = require("cors")



const app = express();
app.use(express.json());
connectDB();
app.use(cors())

app.use("/",router)

const PORT = 9000;

app.listen(PORT,()=>console.log(`server is running on ${PORT}......`))