const db = require('../config/db');

//way to interact with database
module.exports = {
    getPage: async function(key){
        //key = trim(key).toLowerCase();
        let conn = await db.getConnection();
        const row = await conn.query("SELECT `TITLE`,`CONTENT`,`PAGEKEY` FROM pages WHERE PAGEKEY = ?",[key]);
    conn.end();
    return row;
    }
}