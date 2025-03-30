// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize the Express app
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to serve static files and parse form data
app.use(express.static('public')); // For serving static files (CSS, JS)
app.use(bodyParser.urlencoded({ extended: true })); // For handling POST requests

// Temporary storage for posts (this data will not persist between sessions)
let posts = [];

// Route for the home page
app.get('/', (req, res) => {
    res.render('index', { posts: posts }); // Render the homepage with the list of posts
});

// Route to show the form for creating a new post
app.get('/create', (req, res) => {
    res.render('create'); // Render the form to create a new post
});

// Route to handle form submissions and create a new post
app.post('/create', (req, res) => {
    const newPost = {
        title: req.body.title,
        content: req.body.content
    };
    posts.push(newPost); // Add the new post to the array
    res.redirect('/'); // Redirect back to the homepage
});

// Route to handle deleting a post
app.post('/delete', (req, res) => {
    const index = parseInt(req.body.index); // Get the index of the post to delete
    if (!isNaN(index)) {
        posts.splice(index, 1); // Remove the post from the array
    }
    res.redirect('/'); // Redirect back to the homepage
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
