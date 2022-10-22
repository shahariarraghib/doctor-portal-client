import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { Container, Menu, MenuItem } from "@mui/material";

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { user, logout } = useAuth();
  console.log(user);
  return (
    <>
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
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

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#2D89FF" }}
                to="/home"
              >
                <Button color="inherit">HOME</Button>
              </Link>

              <Link
                style={{ textDecoration: "none", color: "#2D89FF" }}
                to="/appointment"
              >
                <Button color="inherit">APPOINTMENT</Button>
              </Link>
              {user?.email ? (
                <Box>
                  <NavLink
                    style={{ textDecoration: "none", color: "#2D89FF" }}
                    to="/deshboard"
                  >
                    {" "}
                    <Button color="inherit">DESHBOARD</Button>
                  </NavLink>

                  <Button onClick={logout} color="inherit">
                    Logout
                  </Button>
                </Box>
              ) : (
                <NavLink
                  style={{ textDecoration: "none", color: "#2D89FF" }}
                  to="/login"
                >
                  {" "}
                  <Button color="inherit">Login</Button>
                </NavLink>
              )}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link
              style={{ textDecoration: "none", color: "#2D89FF" }}
              to="/home"
            >
              <Button color="inherit">HOME</Button>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "#2D89FF" }}
              to="/appointment"
            >
              <Button color="inherit">APPOINTMENT</Button>
            </Link>
            {user?.email ? (
              <Box>
                <NavLink
                  style={{ textDecoration: "none", color: "#2D89FF" }}
                  to="/deshboard"
                >
                  {" "}
                  <Button color="inherit">DESHBOARD</Button>
                </NavLink>
              </Box>
            ) : (
              <></>
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {user?.email ? (
              <Box sx={{ display: "flex" }}>
                <span>
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", md: "16px" },
                      marginTop: { xs: "10px", md: "10px" },
                      marginRight: { xs: "5px", md: "20px" },
                    }}
                  >
                    {user.displayName}
                  </Typography>
                </span>
                <Button
                  onClick={logout}
                  variant="contained"
                  sx={{
                    backgroundColor: "primary.main",
                    fontSize: "16px",
                    fontWeight: "500",
                    padding: "5px 15px",
                  }}
                >
                  Logout
                </Button>
              </Box>
            ) : (
              <NavLink
                style={{ textDecoration: "none", color: "#2D89FF" }}
                to="/login"
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "primary.main",
                    fontSize: "16px",
                    fontWeight: "500",
                    padding: "5px 15px",
                  }}
                >
                  Login
                </Button>
              </NavLink>
            )}
          </Box>
        </Toolbar>
      </Container>
    </>
  );
};

export default Navigation;
