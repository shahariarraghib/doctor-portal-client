import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import facebook from "../../../images/icons/FaceBook.png";
import instragram from "../../../images/icons/Instragram.png";
import google from "../../../images/icons/google.png";
import twiter from "../../../images/icons/twiter.png";
import youtube from "../../../images/icons/youtube.png";
import footerBg from "../../../images/footerBg.png";

const footerBgStyle = {
  background: `url(${footerBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const Footer = () => {
  return (
    <Box style={footerBgStyle}>
      <Container sx={{ marginTop: "78px" }}>
        <Grid
          container
          spacing={3}
          sx={{ paddingTop: "43px", paddingBottom: "32px" }}
        >
          <Grid item xs={12} md={4}>
            <Typography>
              <span
                style={{
                  color: "#2D89FF",
                }}
              >
                Doc
              </span>
              <span
                style={{
                  color: "#642DFF",
                }}
              >
                mic.
              </span>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "paragraph1.main",
              }}
            >
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has bee
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box
                sx={{
                  background: "#E8EEF6",
                  width: "45px",
                  height: "45px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <img
                  style={{ width: "32px", height: "32px" }}
                  src={facebook}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  background: "#E8EEF6",
                  width: "45px",
                  height: "45px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <img
                  style={{ width: "32px", height: "32px" }}
                  src={instragram}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  background: "#E8EEF6",
                  width: "45px",
                  height: "45px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <img
                  style={{ width: "32px", height: "32px" }}
                  src={google}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  background: "#E8EEF6",
                  width: "45px",
                  height: "45px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <img
                  style={{ width: "32px", height: "32px" }}
                  src={twiter}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  background: "#E8EEF6",
                  width: "45px",
                  height: "45px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <img
                  style={{ width: "32px", height: "32px" }}
                  src={youtube}
                  alt=""
                />
              </Box>
            </Box>
            <Typography
              variant="p"
              sx={{
                fontSize: "10px",
                fontWeight: "400",
                color: "paragraph1.main",
              }}
            >
              Copyright @222 Medicom All Rights Reserved
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "primary.main",
              }}
            >
              Quick Linls
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "textB.secondary",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "textB.secondary",
              }}
            >
              Our Pricing
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "textB.secondary",
              }}
            >
              Our Gallery
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "textB.secondary",
              }}
            >
              Appointment
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "textB.secondary",
              }}
            >
              Privacy Policy
            </Typography>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "textB.secondary",
                marginTop: "20px",
              }}
            >
              Services
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "textB.secondary",
              }}
            >
              Our Doctors
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "textB.secondary",
              }}
            >
              Our Latest News
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "textB.secondary",
              }}
            >
              Careers
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: "textB.secondary",
              }}
            >
              Contact Us
            </Typography>
          </Grid>
          {/* Opening Hours */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "secondary.main",
              }}
            >
              Opening Hours
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ color: "#2D89FF" }}>Mon-Tue</span>
              <span>08:00 AM-05:00 PM</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ color: "#2D89FF" }}>Wed- Thu</span>
              <span>09:00 AM-06:00 PM</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ color: "#2D89FF" }}>Fri-Sat</span>
              <span>10:00 AM-07:00 PM</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ color: "#2D89FF" }}>Sunday</span>
              <span>Emergency Only</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ color: "#2D89FF" }}>Personal</span>
              <span>Mon-05:00 PM</span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
