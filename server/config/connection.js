const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/financial-tracker', {
  
});

module.exports = mongoose.connection;
