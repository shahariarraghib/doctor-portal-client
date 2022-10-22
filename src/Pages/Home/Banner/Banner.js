import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
// import pose2 from "../../../images/bannerPic.png";
import ellipse5 from "../../../images/Ellipse_5.png";
import "./banner.css";
// import vactor01 from "../../../images/icons/Vector01.png";
import { Link } from "react-router-dom";

const bannerBgStyle = {
  background: `url(${ellipse5})`,
  backgroundRepeat: "no-repeat",
};

const Banner = () => {
  return (
    <Container>
      <Grid sx={{ mt: 2 }} container spacing={0}>
        {/* left grid */}

        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="div">
            Your <span style={{ color: "#2D89FF" }}>Health</span> Is Our Top
            <span style={{ color: "#642DFF" }}> Priority</span>
          </Typography>

          <Typography
            variant="p"
            component="div"
            sx={{
              mt: 2,
              color: "textB.secondary",
              fontWeight: "400",
            }}
          >
            There are many variations of passages of lpsum <br /> available, but
            the majority hae suffered.
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/appointment"
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "primary.main",
                  fontSize: "16px",
                  fontWeight: "500",
                  padding: "20px 15px",
                  marginTop: "32px",
                }}
              >
                MAKE AN APPOINTMENT
              </Button>
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "56px",
            }}
          >
            <Box>
              <Typography
                variant="p"
                component="div"
                sx={{
                  mt: 2,
                  color: "secondary.main",
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "24px",
                }}
              >
                262k+
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{
                  mt: 2,
                  color: " paragraph1.main",
                  fontWeight: "400",
                  fontSize: "14px",
                  marginTop: "-5px",
                }}
              >
                Recovered Patients
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="p"
                component="div"
                sx={{
                  mt: 2,
                  color: "secondary.main",
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "24px",
                }}
              >
                96%
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{
                  mt: 2,
                  color: " paragraph1.main",
                  fontWeight: "400",
                  fontSize: "14px",
                  marginTop: "-5px",
                }}
              >
                Satisfaction Rate
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="p"
                component="div"
                sx={{
                  mt: 2,
                  color: "secondary.main",
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "24px",
                }}
              >
                86+
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{
                  mt: 2,
                  color: " paragraph1.main",
                  fontWeight: "400",
                  fontSize: "14px",
                  marginTop: "-5px",
                }}
              >
                Expert Doctors
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* right grid */}
        <Grid item sx={{ marginTop: { xs: "50PX", md: "0px" } }} xs={12} md={6}>
          <Box sx={{}}>
            <Box style={bannerBgStyle}>
              <img
                style={{
                  width: "90%",
                }}
                src="https://i.ibb.co/MnP4qjY/banner-Pic.png"
                alt=""
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
