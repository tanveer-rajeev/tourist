  import mongoose from "mongoose";
  import PostMessage from "../models/postMessage.js";

  export const getPosts = async (req, res) => {
    try {
      const postMessage = await PostMessage.find();
      res.status(200).json(postMessage);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
      await newPost.save();
      res.status(200).json(newPost);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

  export const updatePosts = async (req, res) => { 
    const { id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.send(404).send("The given id is not valid");

    try {
      const updatePosts = await PostMessage.findByIdAndUpdate(id,{...post, _id: id},{ new : true});
      res.json(updatePosts);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
    
  }
  
  export const deletePosts = async (req, res) => { 
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.send(404).send("The given id is not valid");

    try {
      await PostMessage.findByIdAndRemove(id);
      
    } catch (error) {
      res.json({ message: error.message });
    }
    
  }
  export const likePost = async (req, res) => { 
    const { id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.send(404).send("The given id is not valid");

    try {
      const post = await PostMessage.findById(id);
      console.log(post);
      const updatePost = await PostMessage.findByIdAndUpdate(id, { likeCount : post.likeCount + 1 }, { new : true });
      res.json(updatePost);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
    
  }