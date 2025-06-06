import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "../Box";
import { OrbitControls } from "@react-three/drei";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import "../../styles/backgroundAnimation.css";
import HomeSection from "../sections/HomeSection/HomeSection";
import AboutSection from "../sections/AboutSection/AboutSection";
import TechSlider from "../sections/TechSlider/TechSlider";
import ProjectSection from "../sections/ProjectSection/ProjectSection";
import ProjectSectionEnd from "../sections/ProjectSectionEnd/ProjectSectionEnd";
import ParticleBackground from "../AnimationComponents/Particle";


export default function Home() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      
      <ResponsiveAppBar />
      <HomeSection />
      <AboutSection />
      <TechSlider/>
      <ProjectSection/>
      <ProjectSectionEnd/>
    </div>
  );
}
