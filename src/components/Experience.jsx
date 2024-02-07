import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { Suspense } from "react";
import Chair from "./Chair";

function Experience() {
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[-0.5, Math.PI / 4]}
    >
      <Stage environment={"city"} intensity={0.6} contactShadow={false}>
        <Suspense fallback={null}>
          <Chair />
        </Suspense>
      </Stage>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[500, 100]}
          resolution={2048}
          mixBlur={2}
          mixStrength={25}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#1c2126"
          roughness={0.9}
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  );
}

export default Experience;
