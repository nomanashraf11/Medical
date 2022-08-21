const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const con = await mongoose.connect(
      "mongodb+srv://minijutt:minijutt@cluster0.bjh8dgf.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(con.connection.host);
  } catch (er) {
    console.log(er);
  }
};

module.exports = connectDb;
