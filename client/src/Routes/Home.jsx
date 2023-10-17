import React from "react";
import { Container, Box } from "@mui/material";

const Home = () => {
  return (
    <Container
      fixed
      maxWidth="xl"
      sx={{
        border: "1px solid red",
        height: "100dvh",
        marginLeft: 30,
        marginTop: "1rem",
      }}
    >
      <Box
        sx={{
          border: "1px solid red",
          height: "100%",
          marginInline: "2rem",
          margin: "1rem",
        }}
      >
        testing
      </Box>
    </Container>
  );
};

export default Home;
