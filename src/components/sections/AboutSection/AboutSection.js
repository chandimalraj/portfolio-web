// src/sections/AboutSection.js
import { Box, Grid, Typography } from "@mui/material";
import Lottie from "lottie-react";
import React, { useEffect, useRef, useState } from "react";
import animationData from "../../../assets/animations/Animation - 1720162723498.json";
import animationIcon from "../../../assets/animations/Animation - 1720164831855.json";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

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

  return (
    <section
      id="about"
      style={{  backgroundColor: "transparent" }}
    >
      <Grid container>
        <Grid
          item
          lg={6}
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
            ref={ref}
            initial={{ opacity: 1, x: -100 }}
            whileHover={{ scale: 1.01 }}
            animate={{ opacity: inView ? 1 : 0, scale: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Lottie
              animationData={animationData}
              style={{ zIndex: 1, width: "500px" }}
              className="animation"
            />
          </motion.div>
        </Grid>
        <Grid
          item
          lg={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            //alignItems: "center",
            width: "100%",
            padding: {
              xs: "20px",  // Applies when screen width < 700px (small devices)
              sm: "50px",  // Applies when screen width ≥ 700px (medium devices)
              md: "100px", // Applies when screen width ≥ 900px (default)
            },
            overflow: "hidden",
          }}
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: "50vw" }}
            whileHover={{ scale: 1.01 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: 1,
              x: inView ? 0 : "50vw",
            }}
            transition={{
              duration: 0.9,
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
              paddingBottom: "40px",
              backgroundColor: "#fbfbfb",
              borderRadius: "8px",
            }}
          >
            <Typography
              sx={{
                color: "#486E97",
                fontFamily: "Roboto",
                fontStyle: "",
                fontSize: "25px",
                fontWeight: "700",
                marginBottom: "50px",
              }}
              align="center"
            >
              Skills and Expertise
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Lottie
                animationData={animationIcon}
                style={{ zIndex: 1, width: "50px" }}
              />
              <Typography
                sx={{
                  color: "#486E97",
                  fontFamily: "Roboto",
                  fontStyle: "",
                  fontSize: "20px",
                  fontWeight: "700",
                  marginLeft: "10px",
                }}
              >
                Front-End Development:
              </Typography>
            </Box>
            <Typography sx={{ marginLeft: "62px", fontWeight: "500" }}>
              Proficient in HTML, CSS, JavaScript, React, and Vue.js. I create
              responsive and user-friendly interfaces that provide an
              exceptional user experience.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Lottie
                animationData={animationIcon}
                style={{ zIndex: 1, width: "50px" }}
              />
              <Typography
                sx={{
                  color: "#486E97",
                  fontFamily: "Roboto",
                  fontStyle: "",
                  fontSize: "20px",
                  fontWeight: "700",
                  marginLeft: "10px",
                }}
              >
                Back-End Development:
              </Typography>
            </Box>
            <Typography sx={{ marginLeft: "62px", fontWeight: "500" }}>
              Experienced with Node.js, Express, Django, and Flask. I build
              robust and scalable server-side applications.{" "}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Lottie
                animationData={animationIcon}
                style={{ zIndex: 1, width: "50px" }}
              />
              <Typography
                sx={{
                  color: "#486E97",
                  fontFamily: "Roboto",
                  fontStyle: "",
                  fontSize: "20px",
                  fontWeight: "700",
                  marginLeft: "10px",
                }}
              >
                Database Management:
              </Typography>
            </Box>
            <Typography sx={{ marginLeft: "62px", fontWeight: "500" }}>
              Skilled in working with both SQL and NoSQL databases, including
              MySQL, PostgreSQL, MongoDB, and Firebase.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Lottie
                animationData={animationIcon}
                style={{ zIndex: 1, width: "50px" }}
              />
              <Typography
                sx={{
                  color: "#486E97",
                  fontFamily: "Roboto",
                  fontStyle: "",
                  fontSize: "20px",
                  fontWeight: "700",
                  marginLeft: "10px",
                }}
              >
                Version Control:
              </Typography>
            </Box>
            <Typography sx={{ marginLeft: "62px", fontWeight: "500" }}>
              {" "}
              Proficient in Git and GitHub, ensuring efficient and collaborative
              project development.{" "}
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutSection;
