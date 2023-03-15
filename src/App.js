import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hamburger from "./components/hamburger/Hamburger";
import Alltasks from "./components/alltasks/Alltasks";
import Issues from "./components/issues/Issues";
import Meetings from "./components/meetings/Meetings";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Alltasks />}>
            <Route path="projects" element={<Projects />} />
            <Route path="issues" element={<Issues />} />
            <Route path="meetings" element={<Meetings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
