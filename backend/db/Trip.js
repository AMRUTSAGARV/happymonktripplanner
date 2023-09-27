const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
    tripName:String,
    destination:String,
    startDate:Date,
    endDate:Date,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Customer' 
    }
})

module.exports = mongoose.model('Trip', tripSchema)