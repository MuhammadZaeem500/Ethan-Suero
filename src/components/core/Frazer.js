import { Box, Typography } from "@mui/material";
import Image from "next/image";

function Frazer() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#000000",
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
              fontFamily: "'Ubuntu', sans-serif",
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
                  color: "#555555",
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
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "505px" },
              height: { xs: "350px", md: "493px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/FrazerHurrellPortrait.svg"
              alt="Frazer Hurrell"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "500px" },
              color: "#000000",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: "bold",
                fontSize: { xs: "18px", md: "24px" },
                lineHeight: 1.4,
                color: "#111111",
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
          <Box sx={{ position: "relative", width: "70px", height: "70px" }}>
            <Image
              src="/images/QuoteMarkIcon.svg"
              alt="Quote Icon"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>

        <hr
          style={{
            width: "100%",
            border: "1.15px solid #000000",
          }}
        />

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
          <Box>
            <Typography
              sx={{
                fontFamily: "'Ubuntu', sans-serif",
                textAlign: "center",
                marginBottom: "15px",
                fontSize: "12px",
                textTransform: "uppercase",
                color: "#666666",
              }}
            >
              Worked with some of the best out there
            </Typography>
          </Box>

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
            <Box sx={{ position: "relative", width: "120px", height: "33px" }}>
              <Image
                src="/images/AdFluxLogo.svg"
                alt="AdFlux Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Box sx={{ position: "relative", width: "110px", height: "33px" }}>
              <Image
                src="/images/Yahoo.svg"
                alt="Yahoo Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Box sx={{ position: "relative", width: "130px", height: "38px" }}>
              <Image
                src="/images/FiaFormula3Logo.svg"
                alt="Formula 3 Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Box sx={{ position: "relative", width: "130px", height: "34px" }}>
              <Image
                src="/images/ExponentialLogo.svg"
                alt="Exponential Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Box sx={{ position: "relative", width: "160px", height: "29px" }}>
              <Image
                src="/images/AwwwardsLogo.svg"
                alt="Awwwards Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Frazer;
