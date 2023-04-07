const {MongoClient} = require('mongodb');

const url = 'mongodb+srv://tharinduchaturanga432:qk375kElAIRd0y0b@cluster0.l8twun9.mongodb.net/?retryWrites=true&w=majority';
//qk375kElAIRd0y0b
//const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'myproject2';

    async function connect(){
        await client.connect();

        const db= await client.db(dbName);
        return db;

    }

    module.exports = connect;



