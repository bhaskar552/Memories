const express=require('express')
const { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogsController, userBlogController } = require('../controllers/blogController')
const router=express.Router()
router.get('/all-blog',getAllBlogsController)
router.post('/create-blog',createBlogController)
router.put('/update-blog/:id',updateBlogController)
router.get('/get-blog/:id',getBlogByIdController)
router.delete('/delete-blog/:id',deleteBlogsController)
router.get('/user-blog/:id',userBlogController);
module.exports=router