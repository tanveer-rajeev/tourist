    import express from "express";
    const router = express.Router();
    import { getPosts, createPosts, updatePosts, deletePosts, likePost } from "../controllers/postController.js";

    router.get("/", getPosts);
    router.post("/", createPosts);
    router.patch("/:id", updatePosts);
    router.delete("/:id", deletePosts);
    router.patch("/:id/likePost", likePost);
    
    export default router;
