import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import whatTheuSayPic from "../../../images/whatTheySayPic.png";
import bgstyle from "../../../images/icons/Ornament24.jpg";
import plusbdStyle from "../../../images/icons/Ornament57.jpg";

const whatTheySaybgStylebg = {
  background: `url(${bgstyle})`,
  backgroundRepeat: "no-repeat",
  height: "96px",
  width: "130px",
  marginLeft: "190px",
};
const whatTheySayPlusStylebg = {
  background: `url(${plusbdStyle})`,
  backgroundRepeat: "no-repeat",
  height: "86px",
  width: "86px",
  marginBottom: "-20px",
};

const WhatTheySayMiddlePart = () => {
  return (
    <Container sx={{ boxShadow: "30px" }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={7}>
          <Typography
            variant="p"
            component="div"
            sx={{
              mt: 2,
              color: "textB.secondary",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            David Jeams
          </Typography>
          <Typography
            variant="p"
            component="div"
            sx={{
              mt: 2,
              color: "textB.secondary",
              fontWeight: "400",
              fontSize: "12px",
            }}
          >
            Pratient
          </Typography>
          <Typography
            variant="p"
            component="div"
            sx={{
              mt: 2,
              color: "textB.secondary",
              fontWeight: "400",
              fontSize: "14px",
              wordWrap: "break-word",
            }}
          >
            simply dummy text of the printing and typesetting industry. <br />
            Lorem Ipsum has been the industry's standard dummy text <br /> ever
            since the 1500s, when an unknown printer took a galley <br /> of
            type and scrambled it is a long established fact that a reader
            <br /> will be distracted by the readable content
          </Typography>
          <Box style={whatTheySayPlusStylebg}></Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box style={whatTheySaybgStylebg}></Box>
          <Box>
            <img
              style={{
                width: "70%",
                marginTop: "-80px",
                marginLeft: "100px",
              }}
              src={whatTheuSayPic}
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhatTheySayMiddlePart;
