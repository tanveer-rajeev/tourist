    import React,{ useState, useEffect} from 'react'
    import { Container, Grow, Grid } from "@mui/material";
    import Posts from "../../components/Posts/Posts";
    import Form from "../../components/Form/Form";
    import { useDispatch } from "react-redux";
    import { getPosts } from "../../actions/postActions";

    const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
        <Container>
         <Grid container spacing={3} sx={{display: 'flex',justifyContent: 'space-between'}}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid   item xs={12} sm={4}>
              <Form currentId={currentId}  setCurrentId={setCurrentId}/>
            </Grid>
         </Grid>
        </Container>
      </Grow>
    )
    }

    export default Home