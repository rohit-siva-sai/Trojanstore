import React, { useEffect } from "react";


import { Canvas } from '@react-three/fiber'
import Experience from "../components/Experience";

import styles from "../styles/About.module.css"


const About = () => {

  return  <div className={`${styles.maya}`}>
     <Canvas
       
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ - 4, 3, 6 ]
        } }
    >
        <Experience/>
    </Canvas>
  
  </div>
  
};

export default About;
