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
import './underlineAnimation.css'
import { Canvas } from "@react-three/fiber";
import Cube from "../Box";


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
        // background:
        //   "linear-gradient(90deg, hsla(270, 94%, 25%, 1) 0%, hsla(158, 94%, 49%, 1) 100%)",
        // background:
        //   "-moz-linear-gradient(90deg, hsla(270, 94%, 25%, 1) 0%, hsla(158, 94%, 49%, 1) 100%)",
        background:
          "-webkit-linear-gradient(90deg, hsla(208, 33%, 21%, 1) 0%, hsla(211, 36%, 46%, 1) 100%)",
        filter:
          "progid:DXImageTransform.Microsoft.gradient(startColorstr='#42047e', endColorstr='#07f49e', GradientType=1)",
      }}
      className=""
    >
      <Container maxWidth="xl" sx={{ height: "100%"}}>
        <Toolbar disableGutters sx={{ height: "100%" }}>
        <Canvas style={{
        position: 'fixed',
        // top: 0,
        // left: 0,
        width: '100px',
        height: '100px',
        // zIndex: -1,
        //  backgroundColor:'red',
        touchAction:'auto'
        
      }} >
         <directionalLight castShadow position={[0,1, 0]} intensity={10} />
         <directionalLight castShadow position={[1, 0, 1]} intensity={10} />
        <Cube position={[-0.6, 0, 0]} size={[0.6,0.6,0.6]} color={'red'}/>
        <Cube position={[0.6, 0, 0]} size={[0.6,0.6,0.6]} color={"#f2e93f"}/>
        <Cube position={[0, 0.6, 0]} size={[0.6,0.6,0.6]} color={'#126109'}/>
        <Cube position={[0, -0.6, 0]} size={[0.6,0.6,0.6]} color={'#35526F'}/>
      </Canvas>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
           
          </Typography>

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
                sx={{ my: 2, color: "white",  width: "150px" ,display:'flex',justifyContent:'center' }}
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
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
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
