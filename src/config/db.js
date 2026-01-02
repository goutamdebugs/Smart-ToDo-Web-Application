const mongoose = require('mongoose')

const connectionDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL)
        console.log("database connection succesfullly");
        
    } catch (error) {
        confirm.log(`error in database connection...${error}`)
    }
}

module.exports = connectionDB