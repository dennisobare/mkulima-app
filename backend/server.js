const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log("MongoDB connected successfully.")})
.catch((err) => {console.log(err)});

// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.use('/api/auth', authRoutes);



app.get('/', (req, res) => {
    res.json({message: "API is running....."});
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

