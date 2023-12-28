import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import path from 'path';
import morgan from "morgan";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import apiRouter from "./Routes/api.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json({ limit: "30mb", extended:true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(morgan('common'));

// VIEWS HTML
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/assets", express.static(path.join(__dirname, "Public/assets")));
app.use("/css", express.static(path.join(__dirname, "Public/css")));
app.use("/js", express.static(path.join(__dirname, "Public/js")));



app.use('/',apiRouter)

// Connect to MongoDB
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
}).catch((err) => console.log(`${err} mongoose connection faild !!!`));