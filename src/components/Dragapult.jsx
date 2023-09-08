import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Dragapult({hovered, ...props}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Dragapult/Dragapult.gltf')
  const { actions } = useAnimations(animations, group);

  console.log(actions);
  
  useEffect(() => {
    const anim = hovered ? 'Armature|Armature|pm0887_00_00_ba02_roar01|Base Layer': 'Armature|Armature|pm0887_00_00_ba10_waitA01|Base Layer';
    actions[anim].reset().fadeIn(0.5).play();
    return () => actions[anim].fadeOut(0.5);
  }, [hovered]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, 0]}>
                <group name="dragapult_with_animationfbx_1" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                  <group name="Object_2_2">
                    <group name="RootNode_3">
                      <group name="Armature_4" scale={50}>
                        <group name="Object_5_5">
                          <group name="GLTF_created_0">
                            <primitive object={nodes.GLTF_created_0_rootJoint} />
                            <group name="Object_216_216_correction">
                              <group name="Object_216_216" />
                            </group>
                            <group name="Object_218_218_correction">
                              <group name="Object_218_218" />
                            </group>
                            <group name="Object_219_219_correction">
                              <group name="Object_219_219" />
                            </group>
                            <group name="Object_220_220_correction">
                              <group name="Object_220_220" />
                            </group>
                            <group name="Object_222_222_correction">
                              <group name="Object_222_222" />
                            </group>
                            <group name="Object_223_223_correction">
                              <group name="Object_223_223" />
                            </group>
                            <group name="Object_224_224_correction">
                              <group name="Object_224_224" />
                            </group>
                            <group name="Object_225_225_correction">
                              <group name="Object_225_225" />
                            </group>
                            <group name="Object_226_226_correction">
                              <group name="Object_226_226" />
                            </group>
                            <group name="Object_228_228_correction">
                              <group name="Object_228_228" />
                            </group>
                            <group name="Object_229_229_correction">
                              <group name="Object_229_229" />
                            </group>
                            <group name="Object_230_230_correction">
                              <group name="Object_230_230" />
                            </group>
                            <skinnedMesh name="Object_222" geometry={nodes.Object_222.geometry} material={materials['pm0887_00_00-BodyAVco01']} skeleton={nodes.Object_222.skeleton} />
                            <skinnedMesh name="Object_225" geometry={nodes.Object_225.geometry} material={materials['pm0887_00_00-BodyB00']} skeleton={nodes.Object_225.skeleton} />
                            <skinnedMesh name="Object_228" geometry={nodes.Object_228.geometry} material={materials['pm0887_00_00-BodyB01']} skeleton={nodes.Object_228.skeleton} />
                            <skinnedMesh name="Object_231" geometry={nodes.Object_231.geometry} material={materials['pm0887_00_00-BEye']} skeleton={nodes.Object_231.skeleton} />
                            <skinnedMesh name="Object_234" geometry={nodes.Object_234.geometry} material={materials['pm0887_00_00-BodyA00']} skeleton={nodes.Object_234.skeleton} />
                            <skinnedMesh name="Object_237" geometry={nodes.Object_237.geometry} material={materials['pm0887_00_00-BodyAVco00']} skeleton={nodes.Object_237.skeleton} />
                            <skinnedMesh name="Object_240" geometry={nodes.Object_240.geometry} material={materials['pm0887_00_00-BodyA01']} skeleton={nodes.Object_240.skeleton} />
                            <skinnedMesh name="Object_243" geometry={nodes.Object_243.geometry} material={materials['pm0887_00_00-ALEye']} skeleton={nodes.Object_243.skeleton} />
                            <skinnedMesh name="Object_246" geometry={nodes.Object_246.geometry} material={materials['pm0887_00_00-AREye']} skeleton={nodes.Object_246.skeleton} />
                            <skinnedMesh name="Object_249" geometry={nodes.Object_249.geometry} material={materials['pm0887_00_00-BodyB00']} skeleton={nodes.Object_249.skeleton} />
                            <skinnedMesh name="Object_252" geometry={nodes.Object_252.geometry} material={materials['pm0887_00_00-BodyB01']} skeleton={nodes.Object_252.skeleton} />
                            <skinnedMesh name="Object_255" geometry={nodes.Object_255.geometry} material={materials['pm0887_00_00-CEye']} skeleton={nodes.Object_255.skeleton} />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Dragapult/Dragapult.gltf')
