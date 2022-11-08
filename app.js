const express = require("express");
const Student = require("./src/model/schema");
require("./src/connection/connection");
const app = express();
const port_no = process.env.PORT || 3000;
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.get("/", (req, res) => {
//   res.send("Hello brothers");
// });
app.post("/students", (req, res) => {
  console.log(req.body);
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/students", async (req, res) => {
  try {
    const student_data = await Student.find();
    res.send(student_data);
  } catch (error) {
    res.send(error);
  }
});

//single user
app.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const single_Student_data = await Student.findById(_id);
    res.send(single_Student_data);
  } catch (error) {
    res.send(error);
  }
});

//update Student
app.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const update_student = await Student.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    res.send(update_student);
  } catch (error) {
    res.status(400).send(error);
  }
});

//delete Student
app.delete("/students/:id" , async(req,res) => {
    try {
        const _id = req.params.id;
        const delete_student = await Student.findByIdAndDelete(_id);
        res.send(delete_student);
    } catch (error) {
        res.status(500).send(error);
    }
})
app.listen(port_no, (req, res) => {
  console.log(`Port is running on ${port_no}`);
}); 
