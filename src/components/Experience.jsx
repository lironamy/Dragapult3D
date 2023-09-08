import { CameraControls, Environment, MeshPortalMaterial, OrbitControls, RoundedBox, useCursor, useTexture } from "@react-three/drei";
import * as THREE from "three";
import React, { useEffect, useState } from "react";
import { Dragapult } from "./Dragapult";
import { Gameboy } from "./Gameboy";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";



export const Experience = () => {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);
  useCursor(hovered);

  const controlsRef = React.useRef();
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        0,
        0,
        8,
        targetPosition.x ,
        targetPosition.y+2,
        targetPosition.z,
        true
      );
    } else {
      controlsRef.current.setLookAt(0, 0, 30, 0, 0, 0, true);
    }
  }, [active]);

  return (
    <>
      <CameraControls ref={controlsRef} maxPolarAngle={Math.PI /2 } minPolarAngle={Math.PI /6}/>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <Gameboy position={[0, -6, -0.2]}/>
      <MonsterStage
      name='Dragapult'
      texture={"/textures/Anime_equirectangular-jpg_sky_world_2061384892.jpg"} 
      active ={active}
      setActive={setActive}
      hovered={hovered}
      setHovered={setHovered}
      >
      <Dragapult scale= {2} position={[0, -1, 0]} hovered={hovered === "Dragapult"}/>
      </MonsterStage>

      
    </>
  );
};


const MonsterStage = ({children, texture, active, setActive, hovered, setHovered, ...props}) => {
  const map = useTexture (texture);
  const portalMaterial = React.useRef();

  useFrame((_state, delta) => {
    const worldOpen = active === props.name;
    easing.damp(portalMaterial.current, "blend" , worldOpen ? 1 : 0, 0.2, delta);
  });

  return (
    <group {...props}>
      <RoundedBox
        name={props.name}
        args={[3.47,3,0.1]}
        position={[0.02, 2.05, 0]}
        onDoubleClick={()=> setActive(active === props.name ? null : props.name)}
        onPointerEnter={() => setHovered(props.name)}
        onPointerLeave={() => setHovered(null)}
      >
        
        <MeshPortalMaterial side={THREE.DoubleSide} ref={portalMaterial}>
        <ambientLight intensity={0.5} />
        <Environment preset="sunset" />
          {/* <Dragapult scale= {2} position={[0, -1, 0]}/> */}
          {children}
          {children}
          <mesh>
            <sphereBufferGeometry args={[5, 64, 64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial >
      </RoundedBox>
    </group>  
  );
}
