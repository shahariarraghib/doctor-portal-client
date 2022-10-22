import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Cardiology1 from "../../../images/icons/Vectorcarup.png";
import Cardiology2 from "../../../images/icons/VectorcarBottom.png";
import MonthlyCheckUp1 from "../../../images/icons/Vectormonthup.png";
import MonthlyCheckUp2 from "../../../images/icons/Vectormonthbottom.png";
import vactorTeeth from "../../../images/icons/Vectorteeth.png";
import Opthalmology from "../../../images/icons/VectorOpt.png";

const OurServices = () => {
  return (
    <Container sx={{ marginTop: "65px" }}>
      <Typography
        variant="p"
        component="div"
        sx={{
          mt: 2,
          color: "secondary.main",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        Our Services
      </Typography>

      <Typography
        variant="h4"
        component="div"
        sx={{
          mt: 2,
          color: "textB.secondary",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        Services For Your Health
      </Typography>

      <Box sx={{ marginTop: "28px" }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 236,
                  height: 152,
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
                        fontSize: "12px",
                      }}
                    >
                      Cardiology
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
                      Seduahag perspiciati under omnised atused error.
                    </Typography>
                    <Typography
                      variant="p"
                      component="div"
                      sx={{
                        mt: 2,
                        color: "textB.secondary",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      Explore Now
                    </Typography>
                  </Box>

                  <Box>
                    <img
                      style={{ height: "14px", weidth: "24px" }}
                      src={Cardiology1}
                      alt=""
                    />
                    <Box
                      sx={{
                        marginTop: "-12px",
                        marginLeft: "2px",
                      }}
                    >
                      <img
                        style={{
                          height: "15px",
                          weidth: "19px",
                        }}
                        src={Cardiology2}
                        alt=""
                      />
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 236,
                  height: 152,
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
                        fontSize: "12px",
                      }}
                    >
                      Monthly Check Up
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
                      Seduahag perspiciati under omnised atused error.
                    </Typography>
                    <Typography
                      variant="p"
                      component="div"
                      sx={{
                        mt: 2,
                        color: "textB.secondary",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      Explore Now
                    </Typography>
                  </Box>

                  <Box sx={{ marginTop: "-10px" }}>
                    <img
                      style={{ height: "4px", weidth: "9px" }}
                      src={MonthlyCheckUp1}
                      alt=""
                    />
                    <Box
                      sx={{
                        marginTop: "-6px",
                        marginLeft: "-3px",
                      }}
                    >
                      <img
                        style={{ height: "22px", weidth: "18px" }}
                        src={MonthlyCheckUp2}
                        alt=""
                      />
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 236,
                  height: 152,
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
                        fontSize: "12px",
                      }}
                    >
                      Cardiology
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
                      Seduahag perspiciati under omnised atused error.
                    </Typography>
                    <Typography
                      variant="p"
                      component="div"
                      sx={{
                        mt: 2,
                        color: "textB.secondary",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      Explore Now
                    </Typography>
                  </Box>

                  <Box>
                    <img
                      style={{ height: "24px", weidth: "18px" }}
                      src={vactorTeeth}
                      alt=""
                    />
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 236,
                  height: 152,
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
                        fontSize: "12px",
                      }}
                    >
                      Cardiology
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
                      Seduahag perspiciati under omnised atused error.
                    </Typography>
                    <Typography
                      variant="p"
                      component="div"
                      sx={{
                        mt: 2,
                        color: "textB.secondary",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      Explore Now
                    </Typography>
                  </Box>

                  <Box>
                    <img
                      style={{ height: "24px", weidth: "18px" }}
                      src={Opthalmology}
                      alt=""
                    />
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default OurServices;
