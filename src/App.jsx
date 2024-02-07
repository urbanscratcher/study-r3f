import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/CustomizationCtx";

function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas
          camera={{ fov: 75, near: 0.1, far: 1000, position: [-2, 1.5, 0] }}
        >
          <color attach="background" args={["#2b3c4e"]} />
          <fog attach="fog" args={["#2b3c4e", 1, 10]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App;
