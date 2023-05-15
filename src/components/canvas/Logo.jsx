import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Logo = () => {
  const [hasError, setHasError] = useState(false);
  const logo = useGLTF("./logo/Logo-transformed.glb");

  const handleLoadError = () => {
    setHasError(true);
  };

  if (hasError) {
    return  null;
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={logo.scene}
        scale={0.022} position-y={0} rotation-y={90}
        position-x={0.9} rotation-x={-0.1}
        position={ [2, -3.25, -1.5]}
        
      />
    </mesh>
  );
};

useGLTF.preload('./logo/Logo-transformed.glb')

const LogoCanvas = () => {
  // const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Set the initial value of the `isMobile` state variable
    // setIsMobile(window.innerWidth < 500);

    // Remove the listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [5, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.15}
          enableRotate={true}
          enablePan={true}
          enableZoom={false}
          maxPolarAngle={0.2}
          minPolarAngle={Math.PI / 2}
        />
        <group
          position={[screenWidth * 0, 0, 0]}

        >
          <Logo />
        </group>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default LogoCanvas;
