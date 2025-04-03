// src/components/Menu.js
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./underlineAnimation.css";
import { Canvas } from "@react-three/fiber";
import Cube from "../Box";
import { Slide } from "@mui/material";

const pages = ["Home", "About", "Projects", "Contact"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        height: "100px",
        background:
          "-webkit-linear-gradient(90deg, hsla(208, 33%, 21%, 1) 0%, hsla(211, 36%, 46%, 1) 100%)",
        filter:
          "progid:DXImageTransform.Microsoft.gradient(startColorstr='#42047e', endColorstr='#07f49e', GradientType=1)",
      }}
      className=""
    >
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          "& .css-e2kr1w-MuiContainer-root": {
            paddingLeft: "0px",
          },
        }}
      >
        <Toolbar disableGutters={true} sx={{ height: "100%" }}>
          <Canvas
            style={{
              width: "100px",
              height: "100px",
              touchAction: "auto",
            }}
          >
            <directionalLight castShadow position={[0, 1, 0]} intensity={10} />
            <directionalLight castShadow position={[1, 0, 1]} intensity={10} />
            <Cube
              position={[-0.7, 0, 0]}
              size={[0.7, 0.7, 0.7]}
              color={"red"}
            />
            <Cube
              position={[0.7, 0, 0]}
              size={[0.7, 0.7, 0.7]}
              color={"#f2e93f"}
            />
            <Cube
              position={[0, 0.7, 0]}
              size={[0.7, 0.7, 0.7]}
              color={"#127109"}
            />
            <Cube
              position={[0, -0.7, 0]}
              size={[0.7, 0.7, 0.7]}
              color={"#35526F"}
            />
          </Canvas>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          ></Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: { md: "center" },
            }}
          >
            {pages.map((page) => (
              <Typography
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  width: "150px",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="underline-animation" // Apply the CSS class
              >
                {page}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                marginRight: "20px",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
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
                padding: "0px !important",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                "& .MuiPaper-root": {
                  background:
                    "linear-gradient(135deg, hsla(208, 33%, 21%, 1), hsla(208, 50%, 30%, 1))",
                  borderRadius: "0px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  minWidth: "200px",
                  width: "50%",
                  marginTop: "100px",
                  minHeight: "100%",
                  paddingTop: "150px",
                  left: "unset !important",
                  right: "0 !important", // Resets left to 0
                },
              }}
              TransitionComponent={Slide}
              TransitionProps={{ direction: "left", timeout: 300 }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    height: "70px",
                    marginLeft: "25px",
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      fontFamily: "Roboto", // Example font
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      color: "rgb(204, 215, 226)",
                      // Add any other CSS properties
                    }}
                  >
                    {/* <Link to={`/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>{page}</Link> */}
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
