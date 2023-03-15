import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Alltasks from "./components/alltasks/Alltasks";
import Issues from "./components/issues/Issues";
import Meetings from "./components/meetings/Meetings";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Alltasks />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/meetings" element={<Meetings />} />
      </Routes>
    </>
  );
}

export default App;

