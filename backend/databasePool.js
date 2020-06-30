const { Pool } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration');
const pool = new Pool(databaseConfiguration);
module.exports = pool;









//debugging code
/*
pool.query('SELECT * FROM generation',(error, response) => {
    if(error)
        console.log(error);
    
    console.log("response rows: ",response.rows);
});

pool.query("INSERT INTO generation(expiration) VALUES('2018-01-01')",(error, response) => {
    if(error)
        console.log(error);
    
    console.log("response rows: ",response.rows);
});
*/