import React from "react";
import { Box, Typography } from "@mui/material";

function Clients() {
  return (
    <Box
      sx={{
        bgcolor: "background.default", // Uses theme background for better dark/light mode support
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
      {/* 1st Item: Houston Exponential (Text Left, Logo Right) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
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
            Houston Exponential
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
              A new digital HUB for Houston’s biggest startup ecosystem.
            </Typography>
          </Box>
        </Box>

        {/* Logo Container with subtle background styling */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: { xs: "100%", md: "583.19px" },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            bgcolor: "grey.50", // Soft neutral background container
            borderRadius: "16px",
            p: { xs: 3, md: 4 },
            border: "1px solid",
            borderColor: "grey.100",
          }}
        >
          <img
            src="/images/div.svg"
            alt="Houston Exponential Logo"
            style={{
              width: "100%",
              maxWidth: "583.19px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>

      {/* 2nd Item: Nami ml (Logo Left, Text Right on Desktop) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
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
            ml: { md: "100px" },
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
            Nami ml
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
              A brand new digital identity and website for the subscription App
              service that focuses on happy subscribers.
            </Typography>
          </Box>
        </Box>

        {/* Logo Container with subtle background styling */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: { xs: "100%", md: "583.19px" },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            bgcolor: "grey.50",
            borderRadius: "16px",
            p: { xs: 3, md: 4 },
            border: "1px solid",
            borderColor: "grey.100",
          }}
        >
          <img
            src="/images/div1.svg"
            alt="Nami ML Logo"
            style={{
              width: "100%",
              maxWidth: "583.19px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>

      {/* 3rd Item: Thin Reel (Text Left, Logo Right) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
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
            thin reel
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
              How we turned a local studio into one of the biggest video
              agencies in the south of the UK.
            </Typography>
          </Box>
        </Box>

        {/* Logo Container with subtle background styling */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: { xs: "100%", md: "583.19px" },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            bgcolor: "grey.50",
            borderRadius: "16px",
            p: { xs: 3, md: 4 },
            border: "1px solid",
            borderColor: "grey.100",
          }}
        >
          <img
            src="/images/div2.svg"
            alt="Thin Reel Logo"
            style={{
              width: "100%",
              maxWidth: "583.19px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Clients;