import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./mail2/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={0.035}
      position={[0.30, -0.30, 0]}
      rotation={[0.600, -Math.PI / -50, 0]} // 🔹 X: yuxarıdan baxış, Y: 3/4 bucaq
    />
  );
};

export const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
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
        {/* İşıqlar əlavə edildi */}
        <ambientLight intensity={1.2} /> {/* Ümumi işıq, default 0.5 */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          castShadow
        /> {/* Günəş işığı effekti */}

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
