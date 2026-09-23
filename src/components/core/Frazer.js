import React from "react";
import { Box, Typography } from "@mui/material";

function Frazer() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#ffffff", // Pure white background
        color: "#000000", // Default text black
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 4, md: 6 },
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1300px",
          backgroundColor: "#ffffff",
          padding: { xs: "15px", md: "2px 0px 0px 0px" },
          border: "2px solid #000000",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            marginTop: "20px",
            textTransform: "uppercase",
            px: { xs: 2, md: "10px" },
          }}
        >
          <Typography
            component="div"
            sx={{
              marginBottom: "20px",
              textTransform: "uppercase",
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 2, md: "150px" },
            }}
          >
            <Box>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  marginRight: "2px",
                  color: "#000000",
                }}
              >
                Name:{" "}
              </span>
              <span
                style={{
                  fontWeight: "300",
                  fontSize: "12px",
                  color: "#555555", // Grey for values
                }}
              >
                Frazer Hurrell
              </span>
            </Box>
            <Box>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  marginRight: "2px",
                  color: "#000000",
                }}
              >
                ROLE:{" "}
              </span>
              <span
                style={{
                  fontWeight: "300",
                  fontSize: "12px",
                  color: "#555555",
                }}
              >
                Creative Technologist
              </span>
            </Box>
            <Box>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  marginRight: "2px",
                  color: "#000000",
                }}
              >
                Company:{" "}
              </span>
              <span
                style={{
                  fontWeight: "300",
                  fontSize: "12px",
                  color: "#555555",
                }}
              >
                Yahoo!
              </span>
            </Box>
            <Box>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  marginRight: "2px",
                  color: "#000000",
                }}
              >
                Project:{" "}
              </span>
              <span
                style={{
                  fontWeight: "300",
                  fontSize: "12px",
                  color: "#555555",
                }}
              >
                British Airways
              </span>
            </Box>
          </Typography>
        </Box>

        <hr
          style={{
            width: "100%",
            border: "1.15px solid #000000",
          }}
        />

        {/* Main Content Area */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-around",
            padding: { xs: "20px", md: "40px" },
            gap: "40px",
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src="/images/Frazer-hurrell-p-1080.jpg.svg"
            alt="Logo"
            sx={{
              height: { xs: "auto", md: "493px" },
              width: { xs: "100%", md: "505px" },
              maxWidth: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Text Content */}
          <Box
            sx={{
              width: { xs: "100%", md: "500px" },
              color: "#000000",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "18px", md: "24px" },
                lineHeight: 1.4,
                color: "#111111", // Deep black for main quote
              }}
            >
              From the initial meeting to the final delivery, Ethan has created
              a feeling of trust and delivered everything we asked of him. The
              quality of his work speaks for itself and he is able to execute at
              a pace. He is an excellent Webflow developer and we will be
              calling on his services again, very soon.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ px: { xs: 2, md: "100px" }, py: 2 }}>
          <img
            src="/images/Quotes.svg.svg"
            alt="Quote Icon"
            style={{
              height: "70px",
              width: "70px",
              display: "block",
            }}
          />
        </Box>

        <hr
          style={{
            width: "100%",
            border: "1.15px solid #000000",
          }}
        />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
            px: 2,
            boxSizing: "border-box",
          }}
        >
          <img
            src="/images/Arrow-Outline.svg.svg"
            alt="Left Arrow"
            style={{ height: "40px", width: "49px", cursor: "pointer" }}
          />
          <span style={{ fontSize: "14.4px", color: "#666666" }}>01/04</span>
          <img
            src="/images/Arrow-Outline.svg.svg"
            alt="Right Arrow"
            style={{
              height: "40px",
              width: "49px",
              transform: "rotate(180deg)",
              cursor: "pointer",
            }}
          />
        </Box>

        <Box
          sx={{
            marginTop: { xs: "50px", md: "100px" },
            marginBottom: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
          }}
        >
          {/* Text Section */}
          <Box>
            <Typography
              sx={{
                textAlign: "center",
                marginBottom: "15px",
                fontSize: "12px",
                textTransform: "uppercase",
                color: "#666666", // Muted grey for subheader
              }}
            >
              Worked with some of the best out there
            </Typography>
          </Box>

          {/* Logos Section */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: "30px", md: "60px" },
              marginTop: "20px",
              width: "100%",
            }}
          >
            <img
              src="/images/Hunter-Yeany.svg.svg"
              alt="AdFlux Logo"
              style={{ height: "33px", maxWidth: "120px", objectFit: "contain" }}
            />
            <img
              src="/images/Nuu-logo.svg.svg"
              alt="Yahoo Logo"
              style={{ height: "33px", maxWidth: "110px", objectFit: "contain" }}
            />
            <img
              src="/images/yahoo-logo.svg"
              alt="Formul Logo"
              style={{ height: "38px", maxWidth: "130px", objectFit: "contain" }}
            />
            <img
              src="/images/Exponential.svg.svg"
              alt="Formul Logo"
              style={{ height: "34px", maxWidth: "130px", objectFit: "contain" }}
            />
            <img
              src="/images/Group.svg"
              alt="Awwwards Logo"
              style={{ height: "29px", maxWidth: "160px", objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Frazer;