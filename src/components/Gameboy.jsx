import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Gameboy(props) {
  const { nodes, materials } = useGLTF('/models/Gameboy/Gameboy.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pCube58_Gold_0.geometry} material={materials.Gold} />
      <mesh geometry={nodes.pCube58_Bronse_0.geometry} material={materials.Bronse} />
      <mesh geometry={nodes.pCube58_aiStandardSurface18_0.geometry} material={materials.aiStandardSurface18} />
      <mesh geometry={nodes.pCube58_gold_label_0.geometry} material={materials.gold_label} />
      <mesh geometry={nodes.pCube59_Silver_0.geometry} material={materials.Silver} />
      <mesh geometry={nodes.pCube59_Bronse_0.geometry} material={materials.Bronse} />
      <mesh geometry={nodes.pCube59_aiStandardSurface18_0.geometry} material={materials.aiStandardSurface18} />
      <mesh geometry={nodes.pCube59_silver_label_0.geometry} material={materials.silver_label} />
      <mesh geometry={nodes.polySurface5_Red_light_0.geometry} material={materials.Red_light} />
      <mesh geometry={nodes.polySurface5_Light_0.geometry} material={materials.Light} />
      <mesh geometry={nodes.polySurface5_animation_yellow_0.geometry} material={materials.animation_yellow} />
      <mesh geometry={nodes.polySurface5_Blue_0.geometry} material={materials.Blue} />
      <mesh geometry={nodes.polySurface5_yellow_logo_0.geometry} material={materials.yellow_logo} />
      <mesh geometry={nodes.polySurface5_Green_0.geometry} material={materials.Green} />
      <mesh geometry={nodes.polySurface5_Yellow_0.geometry} material={materials.Yellow} />
      <mesh geometry={nodes.polySurface5_Metal_0.geometry} material={materials.Metal} />
      <mesh geometry={nodes.polySurface5_black_label1_0.geometry} material={materials.black_label1} />
      <mesh geometry={nodes.polySurface5_black_screen_0.geometry} material={materials.black_screen} />
      <mesh geometry={nodes.polySurface5_glass_0.geometry} material={materials.glass} />
      <mesh geometry={nodes.polySurface5_Red_0.geometry} material={materials.material} />
      <mesh geometry={nodes.polySurface5_white_label_0.geometry} material={materials.white_label} />
      <mesh geometry={nodes.polySurface5_Black_0.geometry} material={materials.Black} />
      <mesh geometry={nodes.polySurface5_black_shine_0.geometry} material={materials.black_shine} />
      <mesh geometry={nodes.polySurface5_Bronse_0.geometry} material={materials.Bronse} />
      <mesh geometry={nodes.polySurface5_aiStandardSurface18_0.geometry} material={materials.aiStandardSurface18} />
      <mesh geometry={nodes.polySurface5_yellow_label_0.geometry} material={materials.yellow_label} />
    </group>
  )
}

useGLTF.preload('/models/Gameboy/Gameboy.gltf')
