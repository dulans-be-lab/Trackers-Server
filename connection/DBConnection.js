const mongoose = require('mongoose');

module.exports.createDBConnection = () => {
    mongoose.connect(process.env.MongoConnectionURL,{useNewUrlParser: true} ,(err) => {
        if (err) {
            console.log('Db connection failed try to reconnect...');
            createDbConnection();
        } else {
            console.log('Db Connection up');
        }
    });
    mongoose.set('useCreateIndex', true);
};
