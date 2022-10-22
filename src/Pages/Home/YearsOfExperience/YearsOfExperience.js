import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// import pose4 from "../../../images/pose_4.png";
import ellipse11 from "../../../images/Ellipse_11.png";
import ellipse10 from "../../../images/Ellipse_10.png";

const yearsBgStyle = {
  background: `url(${ellipse11})`,
  backgroundRepeat: "no-repeat",
  marginLeft: "90px",
  width: "148px",
  height: "148px",
};

const yearsBgStyleBottom = {
  background: `url(${ellipse10})`,
  backgroundRepeat: "no-repeat",
  width: "350px",
  height: "51px",
  marginLeft: "-90px",
  marginTop: "-70px",
};

const YearsOfExperience = () => {
  return (
    <Container sx={{ marginTop: "65px" }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={7}>
          <Typography
            variant="p"
            component="div"
            sx={{
              mt: 2,
              color: "secondary.main",
              fontWeight: "400",
              fontSize: "16px",
            }}
          >
            16+ Years Experiences
          </Typography>

          <Typography
            variant="h4"
            component="div"
            sx={{
              mt: 2,
              color: "textB.secondary",
              fontWeight: "500",
              fontSize: "32px",
            }}
          >
            We Are Always ensure Best Medical Treatment For Your Health
          </Typography>
          <Typography
            variant="p"
            component="div"
            sx={{
              mt: 2,
              color: "paragraph1.main",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look lik
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} sx={{ marginTop: { xs: "20px", md: "0px" } }}>
          <Box style={yearsBgStyle}>
            <img
              style={{ marginLeft: "-90px" }}
              src="https://i.ibb.co/ZXMpVFx/pose-4.png"
              alt=""
            />
            <Box style={yearsBgStyleBottom}></Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default YearsOfExperience;
