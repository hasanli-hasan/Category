const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add a name'],
        unique:true
    },
    description:{
        type: String
     },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
     },
     childreen: [
        { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "ChildCategory"
     }]
});

module.exports = mongoose.model('SubCategory',SubCategorySchema);