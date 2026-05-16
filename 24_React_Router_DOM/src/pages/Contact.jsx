import React from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";

function Contact() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          p: 4,
          boxShadow: 4,
          borderRadius: 4,
          backgroundColor: "#f5f5f5",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 2,
            color: "#111",
          }}
        >
          Contact Me
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            textAlign: "center",
            color: "#666",
            mb: 4,
          }}
        >
          Feel free to contact me anytime 🚀
        </Typography>

        {/* Name */}
        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          sx={{ mb: 3 }}
        />

        {/* Email */}
        <TextField
          fullWidth
          label="Your Email"
          type="email"
          variant="outlined"
          sx={{ mb: 3 }}
        />

        {/* Message */}
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          sx={{ mb: 3 }}
        />

        {/* Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            py: 1.5,
            borderRadius: 3,
            fontSize: "16px",
            textTransform: "none",
          }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
