const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.routes');
const {connect} = require("./config/db.config")
dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

connect()

app.get('/health', (_, res) => res.send('Auth Service is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
