const sqlite3 = require('sqlite3');
const sqlite = sqlite3.verbose();
const db = new sqlite.Database('./file.db', sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.error(err);
})

const sql = `CREATE TABLE students(ID INTEGER PRIMARY KEY, Name, Dept, Email, Mobile, Address)`;
db.run(sql);