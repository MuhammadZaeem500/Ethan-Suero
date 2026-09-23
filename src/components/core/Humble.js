import React from "react";
import { Box, Typography } from "@mui/material";

function Humble() {
  const renderEntry = (text) => (
    <Box
      sx={{
        width: { xs: "100%", sm: "200px" },
        marginBottom: "20px",
        textAlign: { xs: "left", sm: "left" },
        textTransform: "uppercase",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: "11px",
          fontWeight: 500,
          textAlign: { xs: "left", sm: "center" },
          color: "#ffffff",
        }}
      >
        {text}
      </Typography>
    </Box>
  );

  const renderContentSection = (entries) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: { xs: "space-between", md: "flex-end" },
        alignItems: "center",
        textAlign: "right",
        marginTop: "20px",
        width: "100%",
        gap: { md: "30px" },
        px: { xs: 2, md: 0 },
        boxSizing: "border-box",
      }}
    >
      {entries.map((entry, index) => (
        <React.Fragment key={index}>{renderEntry(entry)}</React.Fragment>
      ))}
    </Box>
  );

  // Array data for the image reel items using verified public paths
  const awardImages = [
    {
      src: "/images/ThinReelUxAward.svg",
      alt: "Thinreel UX Award",
      marginTop: "100px",
    },
    {
      src: "/images/ThinReelInnovationAward.svg",
      alt: "Thinreel UI Award",
      marginTop: "0px",
    },
    {
      src: "/images/HoustonExponentialCertificate.svg",
      alt: "Houston Exponential Certificate",
      marginTop: "100px",
    },
    {
      src: "/images/HoustonExponentialUiAward.svg",
      alt: "Thinreel Innovation Award",
      marginTop: "0px",
    },
    {
      src: "/images/HoustonExponentialUxAward.svg",
      alt: "Thinreel UX Award 2",
      marginTop: "100px",
    },
    {
      src: "/images/HoustonExponentialCertificate.svg",
      alt: "Thinreel UI Award 2",
      marginTop: "0px",
    },
    {
      src: "/images/AtomleUiAward.svg",
      alt: "Houston Exponential Certificate 2",
      marginTop: "100px",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#ffffff",
        py: { xs: 6, md: 12 },
        px: { xs: 3, sm: 6, md: 8 },
        boxSizing: "border-box",
        overflowX: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Centered wrapper to control large screen layout cleanly */}
      <Box sx={{ width: "100%", maxWidth: "1300px" }}>
        {/* Title Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
            mt: { xs: 2, md: "100px" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              width: "100%",
              maxWidth: "794px",
              fontSize: { xs: "2.5rem", sm: "4rem", md: "100px" },
              fontWeight: 500,
              textAlign: "left",
              lineHeight: "0.9",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            HUMBLE
            <br /> BAG
          </Typography>
          <Box sx={{ mt: { xs: 3, md: "0" } }}>
            <Typography sx={{ fontSize: "12px", color: "#ffffff", opacity: 0.8 }}>
              I WON SOME AWARDS
              <br />
              ALONG THE WAY
            </Typography>
          </Box>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            margin: { xs: "40px 0", md: "47px 0" },
            display: "flex",
            justifyContent: { xs: "flex-start", md: "center" },
            alignItems: "center",
            overflowX: "auto",
            gap: "16px",
            py: 2,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {awardImages.map((img, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: "185px",
                height: "245px",
                flexShrink: 0,
                marginTop: img.marginTop,
              }}
            >
              <Box
                component="img"
                src={img.src}
                alt={img.alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Content Sections Below the Images */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: { xs: "80px", md: "150px" },
            width: "100%",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <hr
              style={{
                marginLeft: "auto",
                marginRight: 0,
                width: "100%",
                maxWidth: "880px",
                opacity: "0.3",
                borderColor: "#ffffff",
              }}
            />
            {renderContentSection([
              "HOUSTON EXPONENTIAL",
              "AWWARDS",
              "HONORS",
              "2022",
            ])}
          </Box>

          <Box sx={{ width: "100%" }}>
            <hr
              style={{
                marginLeft: "auto",
                marginRight: 0,
                width: "100%",
                maxWidth: "880px",
                opacity: "0.3",
                borderColor: "#ffffff",
              }}
            />
            {renderContentSection([
              "HOUSTON EXPONENTIAL",
              "css design awards",
              "ui / ux / innovation",
              "2022",
            ])}
          </Box>

          <Box sx={{ width: "100%" }}>
            <hr
              style={{
                marginLeft: "auto",
                marginRight: 0,
                width: "100%",
                maxWidth: "880px",
                opacity: "0.3",
                borderColor: "#ffffff",
              }}
            />
            {renderContentSection(["atomle", "awwwards", "nominee", "2021"])}
          </Box>

          <Box sx={{ width: "100%" }}>
            <hr
              style={{
                marginLeft: "auto",
                marginRight: 0,
                width: "100%",
                maxWidth: "880px",
                opacity: "0.3",
                borderColor: "#ffffff",
              }}
            />
            {renderContentSection([
              "atomle",
              "css design awards",
              "ui / ux / innovation",
              "2021",
            ])}
          </Box>

          <Box sx={{ width: "100%" }}>
            <hr
              style={{
                marginLeft: "auto",
                marginRight: 0,
                width: "100%",
                maxWidth: "880px",
                opacity: "0.3",
                borderColor: "#ffffff",
              }}
            />
            {renderContentSection([
              "Thin reel media",
              "awwwards",
              "nominee",
              "2021",
            ])}
          </Box>

          <Box sx={{ width: "100%" }}>
            <hr
              style={{
                marginLeft: "auto",
                marginRight: 0,
                width: "100%",
                maxWidth: "880px",
                opacity: "0.3",
                borderColor: "#ffffff",
              }}
            />
            {renderContentSection([
              "Thin reel media",
              "css design awards",
              "UI / UX / Innovation",
              "2022",
            ])}
            <hr
              style={{
                marginLeft: "auto",
                marginRight: 0,
                width: "100%",
                maxWidth: "880px",
                opacity: "0.3",
                borderColor: "#ffffff",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Humble;