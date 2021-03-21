const mongoose = require('mongoose');

const ChildCategorySchema = new mongoose.Schema({
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
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory"
     }
});

module.exports = mongoose.model('ChildCategory',ChildCategorySchema);