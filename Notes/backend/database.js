const mongoose=require('mongoose')
const mongoURL='mongodb://127.0.0.1:27017/yashfax'
const connectToMongo = ()=>{
    mongoose.connect(mongoURL).then((res)=>{console.log("connected to Mongo")
    console.log(mongoose.connection.readyState);})
    console.log(mongoose.connection.readyState);
}

module.exports = connectToMongo;
