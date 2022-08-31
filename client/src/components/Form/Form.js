import React, { useState } from "react";
import {
  TextField,
  Typography,
  Button,
  Paper,
  FormControl,
  Box,
  Grid,
} from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    seletedFile: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <Paper sx={{ padding: 2, margin: 2 }}>
      <FormControl
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a memrory</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={14}>
            <TextField
              name="creator"
              variant="outlined"
              label="creator"
              fullWidth
              value={postData.creator}
              onChange={(e) => {
                setPostData({ ...postData, creator: e.target.value });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={14}>
            <TextField
              name="title"
              variant="outlined"
              label="title"
              fullWidth
              value={postData.title}
              onChange={(e) => {
                setPostData({ ...postData, title: e.target.value });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={14}>
            <TextField
              name="message"
              variant="outlined"
              label="message"
              fullWidth
              value={postData.message}
              onChange={(e) => {
                setPostData({ ...postData, message: e.target.value });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={14}>
            <TextField
              name="tags"
              variant="outlined"
              label="tags"
              fullWidth
              value={postData.tags}
              onChange={(e) => {
                setPostData({ ...postData, tags: e.target.value });
              }}
            />
          </Grid>
        </Grid>

        <Box sx={{ width: "97%", margin: "10px 0" }}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, seletedFile: base64 })
            }
          />
        </Box>
        <Button
          sx={{ marginBottom: 2 }}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Submit
        </Button>
        <Button
          variant="contai