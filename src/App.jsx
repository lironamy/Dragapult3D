import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Text } from "@react-three/drei";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 30], fov: 30 }} className="center">
      <Text font= "fonts/Caprasimo-Regular.ttf" fontSize={0.5} position={[0,7,0]} >
        Double click to enter the portal
      </Text>
      <Experience />
    </Canvas>
  );
}

export default App;
