import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "../Box";
import { OrbitControls } from "@react-three/drei";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import '../../styles/backgroundAnimation.css'
import HomeSection from "../sections/HomeSection/HomeSection";
import AboutSection from "../sections/AboutSection/AboutSection";

export default function Home() {
  return (
    <div style={{ position: 'relative', height: '150vh', overflow: 'hidden' }}>
      
      <Canvas style={{
        position: 'fixed',
        top: 0,
        left: 0,
        // width: '100%',
        // height: '100%',
        zIndex: -1,
        //  backgroundColor:'red',
        touchAction:'auto'
        
      }} >
         <ambientLight intensity={0.5} />
       <directionalLight castShadow position={[0,1, 0]} intensity={10} />
        <directionalLight castShadow position={[1, 0, 1]} intensity={5} />
         <pointLight position={[0, 100, -1]} />
        <Box position={[-0.5, 0, 0]} size={[0.5,0.5,0.5]} color={'red'}/>
        <Box position={[0.5, 0, 0]} size={[0.5,0.5,0.5]}  color={"#f2e93f"}/>
        <Box position={[0, 0.5, 0]} size={[0.5,0.5,0.5]} color={'#126109'}/>
        <Box position={[0, -0.5, 0]} size={[0.5,0.5,0.5]} color={'#35526F'}/>
        {/* <mesh receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial />
        </mesh> */}
       <OrbitControls />
      </Canvas>
      <ResponsiveAppBar />
       <HomeSection/>
       <AboutSection/>
    </div>
  );
}
