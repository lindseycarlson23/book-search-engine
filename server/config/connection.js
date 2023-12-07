const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:root@cluster0.d4jt8qo.mongodb.net/googlebooks');

module.exports = mongoose.connection;
