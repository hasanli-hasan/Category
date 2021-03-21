const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add a name'],
        unique:true,
    },
    description:{
       type: String
    },
    subcategories: [
        { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
     }]

});

module.exports = mongoose.model('Category',CategorySchema);