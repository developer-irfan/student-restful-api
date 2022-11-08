const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/student_api", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
  })
  .then(() => console.log("connection successful"))
  .catch(() => {
    console.log("connection failed!");
  });
