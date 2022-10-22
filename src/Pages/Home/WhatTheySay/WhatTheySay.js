import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import whatTheySaybg from "../../../images/WhatTheySayBg.png";
import rightButton2 from "../../../images/icons/Vector14.png";
import leftButton2 from "../../../images/icons/Vector15.png";
import WhatTheySayMiddlePart from "./WhatTheySayMiddlePart";

const whatTheySaybgStyle = {
  background: `url(${whatTheySaybg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const WhatTheySay = () => {
  return (
    <Container sx={{ marginTop: "70px" }}>
      <Typography
        variant="p"
        component="div"
        sx={{
          mt: 2,
          color: "secondary.main",
          fontWeight: "400",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        Testimonial
      </Typography>
      <Typography
        variant="p"
        component="div"
        sx={{
          mt: 2,
          color: "textB.secondary",
          fontWeight: "500",
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        What they say?
      </Typography>

      <Grid container spacing={0} sx={{ marginTop: "56px" }}>
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              background: "#CCE2FF",
              width: "65px",
              height: "65px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
            }}
          >
            <img style={{}} src={rightButton2} alt="" />
          </Box>
        </Grid>

        <Grid item xs={12} md={8} style={whatTheySaybgStyle}>
          <WhatTheySayMiddlePart></WhatTheySayMiddlePart>
        </Grid>

        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              background: "#CCE2FF",
              width: "65px",
              height: "65px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
            }}
          >
            <img src={leftButton2} alt="" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhatTheySay;
