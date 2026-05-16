import React from "react";
import { Box, Typography, IconButton } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#111",
        color: "white",
        py: 4,
        mt: 5,
        textAlign: "center",
      }}
    >
      {/* Logo / Name */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          letterSpacing: 2,
          mb: 1,
        }}
      >
        Hardeep Singh
      </Typography>

      {/* Small Text */}
      <Typography
        variant="body1"
        sx={{
          color: "#bdbdbd",
          mb: 2,
        }}
      >
        MERN Stack Developer | React Developer
      </Typography>

      {/* Social Icons */}
      <Box>
        <IconButton
          sx={{
            color: "white",
            transition: "0.3s",
            "&:hover": {
              color: "#00acee",
              transform: "scale(1.2)",
            },
          }}
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          sx={{
            color: "white",
            transition: "0.3s",
            "&:hover": {
              color: "#0A66C2",
              transform: "scale(1.2)",
            },
          }}
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          sx={{
            color: "white",
            transition: "0.3s",
            "&:hover": {
              color: "#E1306C",
              transform: "scale(1.2)",
            },
          }}
        >
          <InstagramIcon />
        </IconButton>
      </Box>

      {/* Copyright */}
      <Typography
        variant="body2"
        sx={{
          mt: 2,
          color: "#888",
        }}
      >
        © 2026 All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
