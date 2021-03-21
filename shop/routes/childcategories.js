const express=require('express');
const {
    getChildCategories,
    getChildCategory,
    createChildCategory,
    updateChildCategory,
    deleteChildCategory
} = require('../controllers/childCategories');

const router=express.Router();

router.route('/:categoryId/subcategory/:subcategoryId/childcategory')
.get(getChildCategories)
.post(createChildCategory);

router.route('/:categoryId/subcategory/:subcategoryId/childcategory/:id')
.get(getChildCategory)
.put(updateChildCategory)
.delete(deleteChildCategory);

module.exports= router 