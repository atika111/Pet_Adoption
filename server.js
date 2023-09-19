const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const run = require("./dbConnect")
const multer = require('multer')


const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser())
//cookieParser
//set the cors right
//client axios.post({}, {withCradentials:true})

//req.cookies.token

const PORT = process.env.PORT;

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const petRoute = require("./routes/petRoute");

// Global Middleware | API's
app.use("/user/auth", authRoute);
app.use("/users/user", userRoute);
app.use("/pet", petRoute);

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });


// const Image = mongoose.model('Image', {
//   filename: String,
// });


app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const image = new Image({ filename: req.file.filename });

  image.save((err) => {
    if (err) {
      console.error('Error saving image to MongoDB:', err);
      return res.status(500).send('Error saving image to MongoDB.');
    }

    return res.status(200).send('Image uploaded and saved to MongoDB.');
  });
});

app.listen(PORT, () => {
  console.log("successfully connected to the server");
  try {
    run.dbConnection()
  } catch (error) {
    console.log('error: ', error);
    
  }
});
