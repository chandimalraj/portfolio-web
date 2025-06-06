// src/sections/AboutSection.js
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Lottie from "lottie-react";
import React, { useEffect, useRef, useState } from "react";
import animationData from "../../../assets/animations/Animation - 1720162723498.json";
import animationIcon from "../../../assets/animations/Animation - 1720164831855.json";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard/ProjectCard";
import ParticleBackground from "../../AnimationComponents/Particle";

const AboutSection = () => {
  const { scrollYProgress } = useScroll();

  console.log(scrollYProgress);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const top = ref.current.getBoundingClientRect().top;
      const height = window.innerHeight;
      console.log(top);
      console.log(height);

      if (top <= height / 2 && top >= -height / 2) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Inside your component
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  let responsiveWidth = "80%";
  if (isXs) responsiveWidth = "80%";
  else if (isSm) responsiveWidth = "";
  else if (isMd) responsiveWidth = "";
  else if (isLg) responsiveWidth = "";

  return (
    <section
      ref={ref}
      id="tech-slider"
      style={{
        // height: "80vh",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // paddingBottom: "50px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Grid
        container
        sx={{
          width: {
            lg: "1200px",
            xl: "1500px",
          },
        }}
      >
        <Grid
          item
          lg={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#4B739E",
              fontFamily: "Roboto",
              fontStyle: "",
              fontSize: "25px",
              fontWeight: "700",
              marginBottom: "10px",
              marginTop: "40px",
            }}
            align="center"
          >
            Projects
          </Typography>
        </Grid>
        <Grid
          item
          lg={3}
          md={4}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            // backgroundColor: "red",
            marginBottom: {
              xs: "12px",
            },
          }}
        >
          <motion.div
            ref={ref}
            // initial={{ opacity: 0, x: -100 }}
            whileHover={{ scale: 1.01 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: 1,
              x: inView ? 0 : -100,
            }}
            transition={{
              duration: 2,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            style={{
              // width: responsiveWidth,
              padding: "20px",
              backgroundColor: "#fbfbfb",
              borderRadius: "8px",
            }}
          >
            <ProjectCard />
          </motion.div>
        </Grid>
        <Grid
          item
          lg={3}
          md={4}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <motion.div
            ref={ref}
            // initial={{ opacity: 0, x: -200 }}
            whileHover={{ scale: 1.01 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: 1,
              x: inView ? 0 : -100,
            }}
            transition={{
              duration: 2,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            style={{
              padding: "20px",
              backgroundColor: "#fbfbfb",
              borderRadius: "8px",
            }}
          >
            <ProjectCard />
          </motion.div>
        </Grid>
        <Grid
          item
          lg={3}
          md={4}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <motion.div
            ref={ref}
            // initial={{ opacity: 0, x: 200 }}
            whileHover={{ scale: 1.01 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: 1,
              x: inView ? 0 : -100,
            }}
            transition={{
              duration: 2,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            style={{
              padding: "20px",
              backgroundColor: "#fbfbfb",
              borderRadius: "8px",
            }}
          >
            <ProjectCard />
          </motion.div>
        </Grid>
        <Grid
          item
          lg={3}
          md={4}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <motion.div
            ref={ref}
            // initial={{ opacity: 0, x: 100 }}
            whileHover={{ scale: 1.01 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: 1,
              x: inView ? 0 : -100,
            }}
            transition={{
              duration: 2,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            style={{
              padding: "20px",
              backgroundColor: "#fbfbfb",
              borderRadius: "8px",
            }}
          >
            <ProjectCard />
          </motion.div>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutSection;
