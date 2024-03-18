const mongoose = require('mongoose');


const DbConnection = () => {
    mongoose.connect(process.env.MONGODB_URI)
    try {
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error in db: ' + error);
    }
}

exports.DbConnection = DbConnection;