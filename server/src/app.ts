import express from "express";
import config from "config";
import logger from "./logger";
import connect from "./db/connect";
import routes from "./routes";


const port = config.get("port") as number;
const host= config.get("host") as string;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.listen(port, host ,() =>{
    console.clear();
    logger.info(`Sever Listening to http://${host}:${port}`);
    connect();
    routes(app);
})
