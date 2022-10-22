import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import pose8 from "../../../images/pose8.png";
import ellipse11 from "../../../images/Ellipse_11.png";
import ellipse10 from "../../../images/Ellipse_10.png";

const yearsBgStyle = {
  background: `url(${ellipse11})`,
  backgroundRepeat: "no-repeat",
  marginTop: "0px",
  marginLeft: "20%",
  width: "148px",
  height: "148px",
};

const yearsBgStyleBottom = {
  background: `url(${ellipse10})`,
  backgroundRepeat: "no-repeat",
  marginTop: "-40px",
  marginLeft: "0px",
  width: "350px",
  height: "51px",
};
const FaqQuestion = () => {
  return (
    <Container sx={{ marginTop: "56px" }}>
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
            FAQ Questions
          </Typography>
          <Typography
            variant="p"
            component="div"
            sx={{
              mt: 2,
              color: "textB.secondary",
              fontWeight: "500",
              fontSize: "24px",
            }}
          >
            Get Your General Answer
          </Typography>
          <Box>
            <Typography
              variant="p"
              component="div"
              sx={{
                mt: 2,
                color: "textB.secondary",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              Get Your General Answer
              <span
                style={{
                  color: "#2D89FF",
                  flexWrap: "wrap",
                  fontSize: "26px",
                  marginLeft: "105px",
                }}
              >
                +
              </span>
            </Typography>

            <Typography
              variant="p"
              component="div"
              sx={{
                mt: 2,
                color: "textB.secondary",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              Will I always see my own doctor?{" "}
              <span
                style={{
                  color: "#2D89FF",
                  flexWrap: "wrap",
                  fontSize: "26px",
                  marginLeft: "45px",
                }}
              >
                +
              </span>
            </Typography>

            <Typography
              variant="p"
              component="div"
              sx={{
                mt: 2,
                color: "textB.secondary",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              What is one Medical’s care?{" "}
              <span
                style={{
                  color: "#2D89FF",
                  flexWrap: "wrap",
                  fontSize: "26px",
                  marginLeft: "82px",
                }}
              >
                +
              </span>
            </Typography>

            <Typography
              variant="p"
              component="div"
              sx={{
                mt: 2,
                color: "textB.secondary",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              What is evidence based medicine?{" "}
              <span
                style={{
                  color: "#2D89FF",
                  flexWrap: "wrap",
                  fontSize: "26px",
                  marginLeft: "35px",
                }}
              >
                +
              </span>
            </Typography>

            <Typography
              variant="p"
              component="div"
              sx={{
                mt: 2,
                color: "textB.secondary",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              What is an academic medical center?
              <span
                style={{
                  color: "#2D89FF",
                  flexWrap: "wrap",
                  fontSize: "26px",
                  marginLeft: "20px",
                }}
              >
                +
              </span>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box style={yearsBgStyle}></Box>
          <Box>
            <img
              style={{
                width: "70%",
                marginTop: "-150px",
                // marginLeft: "-100px",
              }}
              src="https://i.ibb.co/6FNh6jm/pose8.png"
              alt=""
            />
          </Box>
          <Box style={yearsBgStyleBottom}></Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FaqQuestion;
