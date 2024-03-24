import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Container from "@mui/material/Container";
import { PaginationPoster } from "./pagination";
import { ImgMediaCard } from "./mediaCard";
import { ButtonAppBar } from "./AppBAr";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Layout() {
  const [posts, setPost] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostPerPage] = React.useState(10);

  const [pagesCount, setPagesCount] = React.useState(1);

  React.useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      <CssBaseline />
      <ButtonAppBar />
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {currentPosts.map((item, index) => {
              return (
                <Grid item xs={4} key={index}>
                  <ImgMediaCard titel={item.title} description={item.body} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      )}
         <PaginationPoster postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </>
  );
}
