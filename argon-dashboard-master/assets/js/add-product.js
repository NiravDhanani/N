const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs'); // Set view engine to EJS
app.use(express.static('public')); // Serve static files from the 'public' folder

// Multer setup for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads'); // Save uploaded files to 'public/uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to filename to avoid duplication
  }
});
const upload = multer({ storage });

// Render the add product form
app.get('/', (req, res) => {
  res.render('addProduct');
});

// Handle form submission with product data and image upload
app.post('/add-product', upload.single('productImage'), (req, res) => {
  const { productName, productDescription, priceRange } = req.body;
  const productImage = req.file.filename; // Filename of the uploaded image

  // Here you can handle the received data and the uploaded image
  console.log('Received product data:', productName, productDescription, priceRange);
  console.log('Uploaded image:', productImage);
  res.send('Product added successfully!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
