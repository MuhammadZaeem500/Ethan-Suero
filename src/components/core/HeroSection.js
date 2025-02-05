import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
Typography.fontFamily = "inter";
function Page1() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "670px",
        // width: '600px',
        top: "164px",
        marginTop: "60px",
        // left:'460px',
        // padding: '32.66px',
        // textAlign: 'center',
        marginLeft: "300px",
        marginRight: "72px",
        gap: 1,
        "@media (max-width: 600px)": {
          // Responsiveness for smaller screens
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute", // Allows positioning the box absolutely
          right: 0, // Positions the box on the right side
          top: "50%", // Optional: Center vertically
          // transform: 'translateY(-50%)', // Adjust for proper vertical alignment
          height: "171px",
          width: "53px",
          backgroundColor: "black",
          transform: "rotate(180deg)",
        }}
      >
        <Typography
          variant="Body1"
          sx={{
            color: "white",
            fontWeight: "bold",
            margin: "20px",
            // alignItems:'flex-end',
            // textOrientation:'upright',
            writingMode: "vertical-rl",
          }}
        >
          Honors
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: "bold",
            marginTop: "30px",
            textAlign: "center",
            transform: "rotate(180deg)",
          }}
        >
          W.
        </Typography>
      </Box>

      <Box
        sx={{
          height: "670px",
          width: "907px",
          marginLeft: "200px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Inter",
            fontWeight: 500,
            textTransform: "uppercase",
            lineHeight: "1",
          }}
          aria-label="Home"
        >
          stunning
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Inter",
            fontWeight: 500,
            textTransform: "uppercase",
            lineHeight: "1",
          }}
          aria-label="Work"
        >
          brands
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Inter",
            fontWeight: 500,
            textTransform: "uppercase",
            lineHeight: "1",
            display: "flex",
            flexDirection: "row",
          }}
          aria-label="Contact"
        >
          & digital
          <div
            sx={{ flexDirection: "column", height: "104px", width: "272px" }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Inter",
                color: "black",
                marginTop: "27px",
                marginLeft: "18px",
              }}
            >
              freelancer
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Inter", color: "black", marginLeft: "18px" }}
            >
              Digital designer
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Inter",
                color: "black",
                marginLeft: "18px",
                fontSize: "15px",
              }}
            >
              Webflow expert
            </Typography>
          </div>
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontFamily: "Inter",
            fontWeight: 500,
            textTransform: "uppercase",
            lineHeight: "1",
          }}
          aria-label="Contact"
        >
          experiences
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          height: "107px",
          width: "907px",
          marginTop: "563px",
          justifyContentContent: "Center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontFamily: "inter",
            textAlign: "center",
            textTransform: "uppercase",
            // fontSize:'20px'
            // // marginleft:'400px',
          }}
        >
          Work seen On
        </Typography>
        <Box
          sx={{
            margin: "47px 100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/images/adFlux-logo.svg"
            alt="Logo"
            style={{
              height: "59px",
              width: "49px",
              marginRight: "60px",
              marginLeft: "120px",
            }}
          />
          <img
            src="/images/yahoo-logo.svg"
            alt="Logo"
            style={{ height: "31px", width: "112px", marginRight: "60px" }}
          />
          <img
            src="/images/formul-logo.svg"
            alt="Logo"
            style={{ height: "44px", width: "98px", marginRight: "60px" }}
          />
          <img
            src="/images/awwwards-logo.svg"
            alt="Logo"
            style={{ height: "23px", width: "141px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
export default Page1;
