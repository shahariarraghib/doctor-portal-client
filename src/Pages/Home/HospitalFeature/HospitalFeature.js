import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
// import pose7 from "../../../images/pose_7.png";
import HoursDoctorSupport from "../../../images/icons/24hourService.png";
import ExclusiveSupports from "../../../images/icons/exclusive.png";
import FriendlyEnvironment from "../../../images/icons/FriendlyEnvironment .png";
import NurseSupport from "../../../images/icons/NurseSupport.png";
import ellipse11 from "../../../images/Ellipse_11.png";
import ellipse10 from "../../../images/Ellipse_10.png";

const yearsBgStyle = {
  background: `url(${ellipse11})`,
  backgroundRepeat: "no-repeat",
  width: "148px",
  height: "148px",
};

const yearsBgStyleBottom = {
  background: `url(${ellipse10})`,
  backgroundRepeat: "no-repeat",
  width: "350px",
  height: "51px",
  marginTop: "-50px",
};
const HospitalFeature = () => {
  return (
    <Container sx={{ marginTop: "156px" }}>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            marginTop: { xs: "50px", md: "40px" },
          }}
        >
          <Box
            style={yearsBgStyle}
            sx={{ marginLeft: { xs: "100px", md: "200px" } }}
          ></Box>
          <Box sx={{ marginTop: { xs: "-150px", md: "-150px" } }}>
            <img
              style={{ marginLeft: "0px", width: "90%" }}
              src="https://i.ibb.co/djTjTsP/pose-7.png"
              alt=""
            />
          </Box>
          <Box
            style={yearsBgStyleBottom}
            sx={{ marginLeft: { xs: "0px", md: "150px" } }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={6}>
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
            Our Hospital Feature
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
            Make An Appointment Easy And Fast <br /> Services
          </Typography>
          <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 279,
                    height: 140,
                    padding: "12px  24px",
                  },
                }}
              >
                <Paper elevation={3}>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          mt: 2,
                          color: "textB.secondary",
                          fontWeight: "400",
                          fontSize: "14px",
                        }}
                      >
                        24 Hours Doctor Support
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
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's
                      </Typography>
                    </Box>

                    <Box>
                      <img
                        style={{ height: "25px", weidth: "25px" }}
                        src={HoursDoctorSupport}
                        alt=""
                      />
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 279,
                    height: 140,
                    padding: "12px  24px",
                  },
                }}
              >
                <Paper elevation={3}>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          mt: 2,
                          color: "textB.secondary",
                          fontWeight: "400",
                          fontSize: "14px",
                        }}
                      >
                        Exclusive Supports
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
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's
                      </Typography>
                    </Box>

                    <Box>
                      <img
                        style={{ height: "24px", weidth: "24px" }}
                        src={ExclusiveSupports}
                        alt=""
                      />
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 279,
                    height: 140,
                    padding: "12px  24px",
                  },
                }}
              >
                <Paper elevation={3}>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          mt: 2,
                          color: "textB.secondary",
                          fontWeight: "400",
                          fontSize: "14px",
                        }}
                      >
                        Friendly Environment
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
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's
                      </Typography>
                    </Box>

                    <Box>
                      <img
                        style={{ height: "24px", weidth: "24px" }}
                        src={FriendlyEnvironment}
                        alt=""
                      />
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 279,
                    height: 140,
                    padding: "12px  24px",
                  },
                }}
              >
                <Paper elevation={3}>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          mt: 2,
                          color: "textB.secondary",
                          fontWeight: "400",
                          fontSize: "14px",
                        }}
                      >
                        24 Hours Nurse Support
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
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's
                      </Typography>
                    </Box>

                    <Box>
                      <img
                        style={{ height: "24px", weidth: "24px" }}
                        src={NurseSupport}
                        alt=""
                      />
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HospitalFeature;
