import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

function About() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          textAlign: "center",
          mt: 8,
          p: 4,
          borderRadius: 4,
          boxShadow: 3,
          backgroundColor: "#f5f5f5",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#111",
          }}
        >
          About Me
        </Typography>

        {/* Intro */}
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            lineHeight: 2,
            mb: 3,
            fontSize: "18px",
          }}
        >
          Hello 👋 <br />
          My name is Hardeep Singh. I am a BCA student and a passionate MERN
          Stack Developer. Currently, I am learning React.js, Next.js,
          TypeScript, and Data Structures & Algorithms with C++.
        </Typography>

        {/* Skills */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#222",
          }}
        >
          Skills
        </Typography>

        <Typography
          sx={{
            color: "#666",
            mb: 3,
            lineHeight: 2,
          }}
        >
          HTML • CSS • JavaScript • React • Node.js • Express.js • MongoDB • C++
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          sx={{
            px: 4,
            py: 1.2,
            borderRadius: 3,
            textTransform: "none",
            fontSize: "16px",
          }}
        >
          <a href="/contact">Contact Me</a>
        </Button>
      </Box>
    </Container>
  );
}

export default About;
