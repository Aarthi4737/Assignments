import { Client } from "pg";
import config from '../../config/config.json' with {type: 'json'};

export class DBCommons{

    async getData(query:string) : Promise<Array<Map<string,any>>>{

        //Create a new Client instance configuration to connect with the database
        const dbconfig = new Client({
            host: config.db.host,
            port: config.db.port,
            user: config.db.username,
            password: config.db.password,
            database: config.db.database
        });

        //Connet with database with the above connection details
        await dbconfig.connect();

        //Execute query and get the data
        const data = await dbconfig.query(query);

        //Close the DB connection
        await dbconfig.end();

        return data.rows;
    }

}

let db = new DBCommons;
//db.getData();