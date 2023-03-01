import {
  Center,
  Float,
  Html,
  Sky,
  Sparkles,
  Stars,
  Text,
  Text3D,
  useGLTF,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Planet() {
  const car = useGLTF("/nanoplanet.glb");
  const planet = useRef();
  useFrame((state, delta) => {
    planet.current.rotation.y -= delta * 0.1;
  });

  return (
    <>
      <Sparkles scale={50} size={14} count={1000} />
      {/* <Sky/> */}
      <Float floatIntensity={0.25} rotationIntensity={0.25} >
          <Text
            font="/fonts/bebas-neue-v9-latin-regular.woff"
            scale={4}
            
            lineHeight={0.75}
            textAlign={"right"}
            position={[0.75,-0.6,0]}
            rotation-y={-0.25}
          >
          TR        JAN
            <meshBasicMaterial toneMapped={false} />
          </Text>

        </Float>
      <Float floatIntensity={0.25} rotationIntensity={0.25} >
          <Text
            font="/fonts/bebas-neue-v9-latin-regular.woff"
            scale={1}
            
            lineHeight={0.75}
            textAlign={"right"}
            position={[5.5,-2.5,1.5]}
            rotation-y={-0.25}
          >
          store
            <meshBasicMaterial toneMapped={false} />
          </Text>

        </Float>
      
      

      <Stars
        radius={40}
        depth={40}
        count={500}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <primitive
        ref={planet}
        object={car.scene}
        scale={1.7}
        position={[0, -0.5, 0]}
        rotation-y={0.3}
      />
    </>
  );
}
