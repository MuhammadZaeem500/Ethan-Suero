import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FAQAccordion from "./Accordian.js";

function Common() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1300px",
        margin: "0 auto", // Centers the entire container horizontally on all screens
        mt: { xs: 6, md: "125px" },
        px: { xs: 2, sm: 4, md: 6 },
        boxSizing: "border-box",
        backgroundColor: "#ffffff", // White background
        color: "#000000",
      }}
    >
      {/* Top Section Header */}
      <Box sx={{ width: "100%", textAlign: { xs: "center", md: "left" } }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Inter",
            fontWeight: 500,
            textTransform: "uppercase",
            fontSize: { xs: "40px", sm: "60px", md: "85px" }, // Fluid responsive font sizing
            lineHeight: 1,
          }}
          aria-label="Home"
        >
          common
        </Typography>

        {/* Subtitle block that shifts right on desktop, centered on mobile */}
        <Box
          sx={{
            ml: { xs: 0, md: "485px" },
            my: { xs: 2, md: 1 },
          }}
        >
          <Typography sx={{ fontSize: "10px", textTransform: "uppercase", color: "#666666" }}>
            Some questions
          </Typography>
          <Typography sx={{ fontSize: "10px", textTransform: "uppercase", color: "#666666" }}>
            PEOPLE USUALLY ASK
          </Typography>
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontFamily: "Inter",
            fontWeight: 500,
            textTransform: "uppercase",
            fontSize: { xs: "40px", sm: "60px", md: "85px" }, // Fluid responsive font sizing
            lineHeight: 1,
            mb: { xs: 4, md: 6 },
          }}
          aria-label="Work"
        >
          Questions
        </Typography>
      </Box>

      {/* Accordion Component Container */}
      <Box sx={{ width: "100%", mb: 6 }}>
        <FAQAccordion />
      </Box>

      {/* Bottom spacing box */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          width: "100%",
          height: { xs: "50px", md: "200px" },
        }}
      ></Box>
    </Box>
  );
}

export default Common;