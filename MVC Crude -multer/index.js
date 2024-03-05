const express = require("express");
const port = 8000;
const app = express();

const db = require("./config/db");
// const user = require("./models/UserModel");
const path = require("path");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/indexRoutes"));
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));
const multer = require('multer');
// const path = require('path');
const fs = require('fs');

const user = require('./models/UserModel');
app.use(express.json());


// Assuming you have a route to render the edit page
app.get('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.render('edit', { users: [user] });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});






// mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

// const userSchema = new mongoose.Schema({
//     name: String,
//     city: String,
//     avtar: [String]
// });

// const user = mongoose.model('User', userSchema);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.get('/edit', async (req, res) => {
    try {
        const users = await user.find();
        res.render('edit', { users });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});






app.listen(port, (err) => {
  if (err) {
    console.log(`not conected`);
    return false;
  }
  console.log(`server connected on port ${port}`);
});
