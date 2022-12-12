import express from "express";
import fileUpload from 'express-fileupload';
import mongoose from "mongoose";
import customerRouters from './src/router/customer.router';
import bodyParser from "body-parser";

const PORT = 8000;
const app = express();
app.set("view engine", "ejs");
app.set('views', './src/views');
const DB_URL = 'mongodb+srv://YenDoan:yendoan1A@yendoan0501.117vzjo.mongodb.net/customers';
mongoose.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));
app.use(bodyParser.json());
app.use(fileUpload({
    createParentPath: true
}));
app.use('/', customerRouters);
app.listen(PORT, () => {
    console.log("App running on port: " + PORT)
})
