import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
        overflow: "hidden",
        py: { xs: 6, md: 8 },
      }}
    >
      {/* Right Sidebar Badge (Honors) - Fixed to the extreme right edge of the viewport */}
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          position: "fixed",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          height: "171px",
          width: "53px",
          backgroundColor: "black",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter, sans-serif",
            color: "white",
            fontWeight: "bold",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            mb: 2,
          }}
        >
          Honors
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Inter, sans-serif",
            color: "white",
            fontWeight: "bold",
            transform: "rotate(180deg)",
          }}
        >
          W.
        </Typography>
      </Box>

      {/* Main Content Wrapper */}
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          mx: "auto",
          px: { xs: 3, sm: 6, md: "150px" },
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "1150px",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              textTransform: "uppercase",
              lineHeight: 1.05,
              fontSize: { xs: "1.5rem", sm: "4.2rem", md: "5.8rem" },
            }}
            aria-label="Home"
          >
            stunning
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              textTransform: "uppercase",
              lineHeight: 1.05,
              fontSize: { xs: "1.5rem", sm: "4.2rem", md: "5.8rem" },
            }}
            aria-label="Work"
          >
            brands
          </Typography>

          {/* Digital & Subtext Row: Stacked on small screens, Side-by-side on md+ screens */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "flex-end" },
              justifyContent: "flex-start",
              gap: { xs: 2, md: 6 },
              width: "100%",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                textTransform: "uppercase",
                lineHeight: 1.05,
                fontSize: { xs: "1.5rem", sm: "4.2rem", md: "5.8rem" },
              }}
              aria-label="Contact"
            >
              & digital
            </Typography>

            {/* Subtext description box */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: { xs: 1, md: 0 },
                mb: { md: "10px" }, // Aligns the text group nicely with the baseline of '& digital' on desktop
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  color: "text.secondary",
                  fontWeight: 500,
                  fontSize: { xs: "0.85rem", md: "1rem" },
                }}
              >
                freelancer
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  color: "text.secondary",
                  fontWeight: 500,
                  fontSize: { xs: "0.85rem", md: "1rem" },
                }}
              >
                Digital designer
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  color: "text.secondary",
                  fontWeight: 500,
                  fontSize: { xs: "0.85rem", md: "1rem" },
                }}
              >
                Webflow expert
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              textTransform: "uppercase",
              lineHeight: 1.05,
              fontSize: { xs: "1.5rem", sm: "4.2rem", md: "5.8rem" },
            }}
            aria-label="Experiences"
          >
            experiences
          </Typography>
        </Box>
      </Box>

      {/* Work Seen On Section */}
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          mx: "auto",
          px: { xs: 3, sm: 6, md: "150px" },
          mt: { xs: 6, md: 10 },
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            textAlign: { xs: "center", md: "left" },
            textTransform: "uppercase",
            fontWeight: 600,
            letterSpacing: "1px",
            fontSize: "0.85rem",
            color: "text.secondary",
            mb: 2.5,
          }}
        >
          Work seen On
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            gap: { xs: 4, md: 6 },
            width: "100%",
          }}
        >
          <Box
            component="img"
            src="/images/adFlux-logo.svg"
            alt="AdFlux Logo"
            sx={{ height: "36px", width: "auto", maxWidth: "110px" }}
          />
          <Box
            component="img"
            src="/images/yahoo-logo.svg"
            alt="Yahoo Logo"
            sx={{ height: "24px", width: "auto", maxWidth: "90px" }}
          />
          <Box
            component="img"
            src="/images/formul-logo.svg"
            alt="Formul Logo"
            sx={{ height: "32px", width: "auto", maxWidth: "90px" }}
          />
          <Box
            component="img"
            src="/images/awwwards-logo.svg"
            alt="Awwwards Logo"
            sx={{ height: "18px", width: "auto", maxWidth: "110px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}