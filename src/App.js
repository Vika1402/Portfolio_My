import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import { tiny } from "./assets/tiny.mp4";
import AboutMe from "./Pages/AboutMe/AboutMe";
import MernStackIcons from "./components/MernIcon/MernStackIcons";
import ServicePage from "./Pages/ServicePage/ServicePage";
export default function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <MernStackIcons />
      <AboutMe />
      <ServicePage/>
    </>
  );
}
