const express=require('express');
const {
    getSubCategories,
    getSubCategory,
    createSubCategory,
    updateSubCategory,
    deleteSubCategory
} = require('../controllers/subCategories');

const router=express.Router();

router.route('/:categoryId/subcategory')
.get(getSubCategories)
.post(createSubCategory);

router.route('/:categoryId/subcategory/:id')
.get(getSubCategory)
.put(updateSubCategory)
.delete(deleteSubCategory);

module.exports= router 