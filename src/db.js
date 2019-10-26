const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");

mongoose.plugin(slug);
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(e => console.error(e));
mongoose.set("useCreateIndex", true);

const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to the database"));

module.exports = db;
