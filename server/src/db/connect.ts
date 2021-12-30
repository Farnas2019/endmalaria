import config from "config";
import mongoose, { ConnectOptions } from "mongoose";
import log from "../logger";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
function connect(){
    const dbURL = config.get("dbURL") as string;

    return mongoose.connect(dbURL, options as ConnectOptions).then(()=>
       { log.info("Database Connected");}
    ).catch((error)=>{
        log.info(error);
        process.exit(1);
    })

}
export default connect