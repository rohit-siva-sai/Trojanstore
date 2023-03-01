import { Float, OrbitControls, Sparkles } from "@react-three/drei";

import { Suspense } from "react";
import Placeholder from "./Placeholder.js";
import Planet from "./Planet.js";



export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
     
      <ambientLight intensity={0.8} />
      

      <Suspense fallback={<Placeholder position-y={-0.5} scale={[2, 3, 2]} />}>
        <Planet scale={0.35} />
      </Suspense>
    </>
  );
}
