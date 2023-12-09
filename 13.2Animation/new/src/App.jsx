import { Box } from "./components/box";
import "./App.css";

function App() {
  return (
    <>
      <Box width={50} height={50} background={"blue"}></Box>
      <Box width={100} height={100} background={"green"}></Box>
      <Box width={150} height={150} background={"yellow"}></Box>
      <Box width={200} height={200} background={"blue"}></Box>
    </>
  );
}

export default App;
