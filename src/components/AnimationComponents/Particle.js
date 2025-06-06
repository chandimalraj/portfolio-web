import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // ✅ Correct import

export default function ParticleBackground({sectionId}) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id={sectionId} // Unique id per section
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // Keeps it in the background
        particles: {
          number: { value: 80 },
          color: { value: "#61DAFB" }, // React blue color
          shape: { type: "circle" },
          opacity: { value: 0.7 },
          size: { value: 3 },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            // onHover: { enable: true, mode: "repulse" },
            // onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
      }}
      style={{
        position: "absolute", // Position particles absolutely
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width:"100%",
        height:"100%",
        zIndex: -1, // Put it behind the content
      }}
    />
  );
}
