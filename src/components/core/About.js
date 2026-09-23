import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1440px",
        mx: "auto",
        px: { xs: 3, sm: 6, md: "150px" },
        py: { xs: 8, md: "120px" },
        backgroundColor: "#FFFFFF",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          gap: { xs: 3, md: 10 },
        }}
      >
        {/* Left Column: About Section Label */}
        <Box
          sx={{
            minWidth: { md: "100px" },
            pt: { md: "4px" }, // Tiny optical alignment tweak with the text
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              lineHeight: "1.2",
              letterSpacing: "0.5px",
              textAlign: "left",
              textTransform: "uppercase",
              color: "text.secondary",
            }}
          >
            About
          </Typography>
        </Box>

        {/* Right Column: Bio Paragraph Text */}
        <Box
          sx={{
            maxWidth: "850px",
            width: "100%",
          }}
        >
          <Typography
            component="p"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.375rem" }, // responsive scaling matching ~38px desktop max
              fontWeight: 400,
              lineHeight: { xs: 1.3, md: 1.15 },
              textAlign: "left",
              color: "#111111",
              wordSpacing: { md: "3px" },
            }}
          >
            Ethan Suero is an independent designer focused on crafting immersive
            digital experiences. He believes every project is an opportunity to
            deliver a unique and memorable digital experience that delights
            users and builds brand equity.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default About;