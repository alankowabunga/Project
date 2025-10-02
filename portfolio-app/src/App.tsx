// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { useEffect, useRef, useState } from "react";
import "./styles/App.scss";
import { IntroSection } from "./components/main/IntroSection";
import { SkillSet } from "./components/main/SkillSet";
import { Portfolio } from "./components/main/Portfolio";
import { Footer } from "./components/footer/Footer";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ParticlesBackground } from "./animations/ParticlesBackground";
import { NavBar } from "./components/header/NavBar";
import { AboutMe } from "./components/main/AboutMe";
import { Name_svg } from "./assets/SVG/Name_svg";
import { gsap, Power2 } from "gsap";

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  let topBtnRef = useRef(null);


  // 顯示 Top Button
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        topBtnRef.classList.remove("hidden");
      } else {
        topBtnRef.classList.add("hidden");
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <>
      <ParticlesBackground />
      <div className="App">
        <NavBar />
        <IntroSection />
        <SkillSet />
        <Portfolio />
        <AboutMe />
        <Footer />
        <FontAwesomeIcon
          icon={faAnglesUp}
          className="top-icon"
          fontSize="1.8rem"
          onClick={goToTop}
          ref={(el) => (topBtnRef = el)}
        />
      </div>
    </>

  );
}

export default App;
