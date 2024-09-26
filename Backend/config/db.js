const mongoose = require('mongoose');

    const db = async () => {
        
        try {
            await mongoose.connect(process.env.db_url)
            console.log('conntected');
            mongoose.connection.on('connected', () => {
                console.log("MongoDb Atlas conneted");
            })
        }
        catch (error) {
            console.log(error);
        }
    
    }

module.exports=db