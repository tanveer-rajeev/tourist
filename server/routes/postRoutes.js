    import express from "express";
    const router = express.Router();
    import { getPosts,getPostsBySearch, createPosts, updatePosts, deletePosts, likePost } from "../controllers/postController.js";
    import auth from "../middleware/auth.js";
console.log("router");
    router.get("/", getPosts);
    router.get("/search",getPostsBySearch);
    router.post("/",auth, createPosts);
    router.patch("/:id",auth, updatePosts);
    router.delete("/:id",auth, deletePosts);
    router.patch("/:id/likePost",auth, likePost);
    
    export default router;
