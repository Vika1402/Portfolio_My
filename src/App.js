import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";

import AboutMe from "./Pages/AboutMe/AboutMe";
import MernStackIcons from "./components/MernIcon/MernStackIcons";
import ServicePage from "./Pages/ServicePage/ServicePage";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
export default function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <MernStackIcons />
      <AboutMe />
      <ServicePage />
      <ProjectPage />
    </>
  );
}
