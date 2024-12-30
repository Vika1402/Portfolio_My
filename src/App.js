import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";

import AboutMe from "./Pages/AboutMe/AboutMe";
import MernStackIcons from "./components/MernIcon/MernStackIcons";
import ServicePage from "./Pages/ServicePage/ServicePage";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import Footer from "./Pages/Footer/Footer";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* Render all components on the HomePage */}
              <HomePage />
              <AboutMe />
              <ServicePage />
              <ProjectPage />
              <Footer />
            </div>
          }
        />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}
