import { Box, Container, Grid } from "@mui/material";
import React from "react";
import appoi from "../../../../images/ezgif-1-df684e0535.gif";
import Calander from "../../../Shared/Calender/Calander";

const AppointmentHeader = ({ date, setDate }) => {
  return (
    <Box>
      <Container>
        <Box sx={{ flexGrow: 1, mt: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Calander date={date} setDate={setDate}></Calander>
            </Grid>
            <Grid item xs={12} md={6}>
              <img style={{ width: "95%" }} src={appoi} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AppointmentHeader;
