const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')


//Load env vars
dotenv.config({path: './config/config.env'});

//connect to database
connectDB();

//Route files
const categories= require('./routes/categories')
const subcategories=require('./routes/subcategories')
const childcategories= require('./routes/childcategories')

const app= express();

//Body Parser
app.use(express.json())

//Mount routers
app.use('/category',categories)
app.use('/category',subcategories)
app.use('/category',childcategories)


const PORT= process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))