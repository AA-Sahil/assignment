import express from "express";
import { port } from "./app/config/config.js";
import router from "./router/api.js";

let app = express();

app.use("/myApi",router)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});