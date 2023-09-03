const mongoose = require("mongoose");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    `mongodb+srv://akash:umCZxw8lEsxqtGcp@cluster0.uknzscu.mongodb.net/employee_review?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log(`Connected to DB: employee_review`);
}


const db = mongoose.connection;

module.exports = db;
