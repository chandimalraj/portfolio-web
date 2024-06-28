// src/components/Box.js
import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

function Box(props) {
  const mesh = React.useRef();
  const size = props.size
  const color = props.color

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.z += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
      {/* <Text
        position={[1, 1, 1]} // Position the text slightly outside the box surface
        rotation={[0, Math.PI / 2, 0]} // Rotate the text to face the box side
        fontSize={0.5}
        color="white"
      >
        Hello
      </Text> */}
    </mesh>
  );
}

export default Box;
