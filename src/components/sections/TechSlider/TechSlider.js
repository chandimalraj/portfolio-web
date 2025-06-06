import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Paper } from "@mui/material";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import javaLogo from "../../../assets/images/java_logo.svg";
import reactLogo from "../../../assets/images/react_logo_.svg";
import mysqlLogo from "../../../assets/images/mysql_logo.svg";
import mongoLogo from "../../../assets/images/mongodb_logo.svg";
import nodeLogo from "../../../assets/images/node_logo.svg";
import "./tech-slider.css";
import ParticleBackground from "../../AnimationComponents/Particle";

const Item = (inView, src) => {
  return (
    <Grid item lg={4}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileHover={{ scale: 1.01 }}
        animate={{ opacity: inView ? 1 : 0, scale: 1, x: inView ? 0 : -100 }}
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
        <Paper
          sx={{
            height: "200px",
            margin: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img src={src} width="100%" />
        </Paper>
      </motion.div>
    </Grid>
  );
};

export default function TechSlider() {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
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
  const items = [
    { title: "Slide 1", description: "Description for Slide 1" },
    { title: "Slide 2", description: "Description for Slide 2" },
    { title: "Slide 3", description: "Description for Slide 3" },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 700, // Below 700px
        settings: {
          slidesToShow: 2, // Show 2 items
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Below 480px
        settings: {
          slidesToShow: 1, // Show 1 item for very small screens
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section ref={ref} id="tech-slider" className="responsive-section">
      <ParticleBackground sectionId="tech-slider-particles"/>
      <Typography
        sx={{
          color: "white",
          fontFamily: "Roboto",
          fontStyle: "",
          fontSize: "25px",
          fontWeight: "700",
          marginBottom: "50px",
        }}
        align="center"
      >
        Technologies
      </Typography>
      <div className="tech-container">
        <Slider {...settings}>
          {Item(inView, javaLogo)}
          {Item(inView, nodeLogo)}
          {Item(inView, reactLogo)}
          {Item(inView, mongoLogo)}
          {Item(inView, mysqlLogo)}
        </Slider>
      </div>
    </section>
  );
}
