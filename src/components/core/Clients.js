import React from "react";
import { Box, Typography } from "@mui/material";

const clientsData = [
  {
    name: "Houston Exponential",
    description: "A new digital HUB for Houston’s biggest startup ecosystem.",
    imageSrc: "/images/div.svg",
    alt: "Houston Exponential Logo",
  },
  {
    name: "Nami ml",
    description:
      "A brand new digital identity and website for the subscription App service that focuses on happy subscribers.",
    imageSrc: "/images/div1.svg",
    alt: "Nami ML Logo",
  },
  {
    name: "Thin Reel",
    description:
      "How we turned a local studio into one of the biggest video agencies in the south of the UK.",
    imageSrc: "/images/div2.svg",
    alt: "Thin Reel Logo",
  },
];

function Clients() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        width: "100%",
        maxWidth: "1440px",
        mx: "auto",
        px: { xs: 3, sm: 6, md: "120px", lg: "150px" },
        py: { xs: 6, md: 15 },
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 8, md: "150px" },
      }}
    >
      {clientsData.map((client, index) => {
        const isEven = index % 2 !== 0;

        return (
          <Box
            key={client.name}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: isEven ? "row-reverse" : "row",
              },
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              gap: { xs: 4, md: 6 },
            }}
          >
            {/* Text Content */}
            <Box
              sx={{
                textAlign: "left",
                width: { xs: "100%", md: "400px" },
                // If it's an even index (row-reverse), add matching margin-left on desktop to preserve spacing
                ml: { md: isEven ? "100px" : 0 },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  letterSpacing: "0.05em",
                  color: "text.primary",
                  mb: 1.5,
                }}
              >
                {client.name}
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "270px",
                  ml: { xs: 0, md: "10px" },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: "0.9rem", md: "14px" },
                    lineHeight: "1.6",
                    color: "text.secondary",
                    textAlign: "left",
                  }}
                >
                  {client.description}
                </Typography>
              </Box>
            </Box>

            {/* Logo Container */}
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                maxWidth: { xs: "100%", md: "583.19px" },
                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: isEven ? "flex-start" : "flex-end",
                },
                bgcolor: "grey.50",
                borderRadius: "16px",
                p: { xs: 3, md: 4 },
                border: "1px solid",
                borderColor: "grey.100",
              }}
            >
              <img
                src={client.imageSrc}
                alt={client.alt}
                style={{
                  width: "100%",
                  maxWidth: "583.19px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default Clients;