// src/sections/HomeSection.js
import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import img from "../../../assets/images/photo.jpeg";
import Lottie from "lottie-react";
import animationData from "../../../assets/animations/Animation - 1720154126904.json";
import "./home-section.css";
import { motion } from "framer-motion";
import ParticleBackground from "../../AnimationComponents/Particle";

const HomeSection = () => {
  return (
    <section id="home" className="responsive-home-section">
      <ParticleBackground sectionId="home-particles"/>
      <Grid container>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "100px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            elevation={3}
            style={{
              width: "200px",
              borderRadius: "100px",
              marginBottom: "30px",
              zIndex:"2"
            }}
          >
            <img
              src={img}
              style={{ width: "200px", borderRadius: "100px" }}
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "DM-Serif-Text",
                fontStyle: "italic",
                fontSize: "20px",
                fontWeight: "700",
              }}
              align="center"
            >
              Hi....
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontFamily: "DM-Serif-Text",
                fontStyle: "italic",
                fontSize: "20px",
                fontWeight: "700",
              }}
              align="center"
            >
              I'm Chandimal Rajapaksha - A Passionate Software Developer
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontFamily: "DM-Serif-Text",
                fontStyle: "italic",
                fontSize: "20px",
                fontWeight: "700",
              }}
              align="center"
            >
              Crafting Innovative Solutions in Software World
            </Typography>
          </motion.div>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: {
              xs: "20px", // Applies when screen width < 700px (small devices)
              sm: "100px", // Applies when screen width ≥ 700px (medium devices)
              md: "50px", // Applies when screen width ≥ 900px (default)
              lg: "100px",
            },
            paddingTop: {
              sm: "0px",
              xs: "0px",
            },
          }}
        >
          <Lottie
            animationData={animationData}
            style={{ zIndex: 1, width: "auto" }}
            className="animation"
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default HomeSection;
