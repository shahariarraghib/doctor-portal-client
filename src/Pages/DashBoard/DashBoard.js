import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { Button, Stack } from "@mui/material";

import DeshBoardHome from "./DeshBoardHome/DeshBoardHome";
import Admin from "./Admin/Admin";
import useAuth from "../../Hooks/useAuth";
import AdminRoute from "../Login/Login/AdminRoute/AdminRoute";

import HomeIcon from "@mui/icons-material/Home";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FeedIcon from "@mui/icons-material/Feed";
import Payment from "./PayMent/Payment";
import AddDoctors from "./AddDoctors/AddDoctors";
const drawerWidth = 240;

function DashBoard(props) {
  const { admin } = useAuth();
  // console.log(admin)
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [date, setDate] = React.useState(new Date())
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

      <Divider />
      <Box sx={{ mt: 5, p: 5 }}>
        <NavLink style={{ textDecoration: "none", color: "black" }} to="/home">
          <Stack direction="row" spacing={2}>
            <Button
              startIcon={<HomeIcon />}
              style={{ display: "flex", justifyContent: "flex-start" }}
              color="inherit"
            >
              {" "}
              Home
            </Button>
          </Stack>
        </NavLink>

        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to="/appointment"
        >
          <Stack direction="row" spacing={2}>
            <Button
              startIcon={<CalendarMonthIcon />}
              style={{ display: "flex", justifyContent: "flex-start" }}
              color="inherit"
            >
              Appointment
            </Button>
          </Stack>
        </NavLink>

        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to="deshboardhome"
        >
          <Stack direction="row" spacing={2}>
            <Button
              startIcon={<FeedIcon />}
              style={{ display: "flex", justifyContent: "flex-start" }}
              color="inherit"
            >
              DESHBOARD
            </Button>
          </Stack>
        </NavLink>

        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to="adddoctors"
        >
          <Stack direction="row" spacing={2}>
            <Button
              startIcon={<FeedIcon />}
              style={{ display: "flex", justifyContent: "flex-start" }}
              color="inherit"
            >
              add doctor
            </Button>
          </Stack>
        </NavLink>

        {admin && (
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="admin"
          >
            {" "}
            <Stack direction="row" spacing={2}>
              <Button
                startIcon={<AdminPanelSettingsIcon />}
                style={{ display: "flex", justifyContent: "flex-start" }}
                color="inherit"
              >
                {" "}
                MAKE ADMIN
              </Button>
            </Stack>
          </NavLink>
        )}
      </Box>

      <Outlet></Outlet>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} style={{ height: "100vh" }}>
      <CssBaseline />

      <AppBar
        // position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, p: 5 }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Deshboard
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {/* <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Calander
                                date={date}
                                setDate={setDate}
                            ></Calander>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <DeshBordAppointment date={date}></DeshBordAppointment>
                        </Grid>

                    </Grid>
                </Box> */}

        <Routes>
          <Route path="deshboardhome" element={<DeshBoardHome></DeshBoardHome>}>
            {" "}
          </Route>

          <Route path="adddoctors" element={<AddDoctors></AddDoctors>}>
            {" "}
          </Route>

          <Route
            path="deshboardhome/payment/:appointmentId"
            element={<Payment></Payment>}
          >
            {" "}
          </Route>

          <Route
            path="admin"
            element={
              <AdminRoute>
                <Admin></Admin>
              </AdminRoute>
            }
          ></Route>
        </Routes>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
