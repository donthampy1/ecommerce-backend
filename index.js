const express = require('express')
const app =express()
const mongoose = require('mongoose')
const Dbconnect = require ('./config/db.js')
require('dotenv').config()
const userRouter = require('./routes/userRouter.js')
const authRouter = require('./routes/authRouter.js')
const productRouter = require('./routes/productRouter.js')
const autocomplete = require('./routes/autocomplete.js')
const productsearch = require('./routes/productsearch.js')
const cors = require('cors')



Dbconnect() 
const allowedOrigins = [
    'https://frontendecommerce-f01jty5s0-don-thampys-projects.vercel.app',
    'https://frontendecommerce-seven.vercel.app'  // Include this if it's also relevant
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

app.use(express.json())
app.use('/auth',authRouter.router)
app.use('/addproducts',productRouter.router)
app.use('/autocomplete',autocomplete.router)
app.use('/productsearch',productsearch.router)



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
