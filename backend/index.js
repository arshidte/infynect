const express = require("express");

const app = express();
app.use(express.json());

//Database
const sqlite3 = require("sqlite3");
const sqlite = sqlite3.verbose();
const db = new sqlite.Database(
  "./file.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err);
    console.log("DB IS RUNNING SUCCESSFULLY");
  }
);

app.get("/api/students", (req, res) => {

  db.serialize(function () {
    db.all("SELECT * FROM students", (err, response) => {
      if (err != null) {
        console.log(err);
        res.status(400).json(err)
      }
      res.status(200).json(response);
    });
  });
});

app.post("/api/students", (req, res) => {
  const { name, dept, email, mobile, address } = req.body;
  db.run(
    "INSERT INTO students(Name, Dept, Email, Mobile, Address) VALUES(?, ?, ?, ?, ?)",
    [name, dept, email, mobile, address],
    (err) => {
      if (err) {
        console.log(err.message);
        res.status(400).json(err.message);
      }
      console.log(`Row was added to the table`);
      res.status(200).json("Successfully added to the DB");
    }
  );
});

app.listen("8000", () => {
  console.log("Server is running in 8000");
});
