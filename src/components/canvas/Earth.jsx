import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/mail2/scene.gltf");
  if (!earth?.scene) return null;

  return (
    <primitive
      object={earth.scene}
      scale={0.035}
      position={[0.3, -0.3, 0]}
      rotation={[0.6, -Math.PI / -50, 0]}
    />
  );
};

export const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 0, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.3} /> // əvvəl 1.2 idi, indi daha yumşaq
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          castShadow
          color="#fff2e6"
        />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
