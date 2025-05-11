// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import  { useContext, useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import { GlobalContext } from "../../context/Context";

export const Menu = () => {
  // animation
  const menuRef = useRef(null);
  const tl = useRef();
  const toggleTl = useRef();
  
  const {striped,setStriped} = useContext(GlobalContext);


  const onEnter = () => {
    // 如果是開啟狀態則不使用動畫
    if (striped===false) {
      return;
    }

    // 如果之前有已经存在的tl，先清除
    if (tl.current) {
      tl.current.kill();
    }

    tl.current = gsap
      .timeline()
      .to(
        ".line1",
        {
          transformOrigin: "50% 50%",
          scaleX: 1.5,
          repeat: 1,
          yoyo: true,
          ease: Power2.easeInOut,
          duration: 0.2,
        },
        "start"
      )
      .to(
        ".line2",
        {
          transformOrigin: "50% 50%",
          scaleX: 1.5,
          repeat: 1,
          yoyo: true,
          ease: Power2.easeInOut,
          duration: 0.2,
        },
        "start+=0.1"
      )
      .to(
        ".line3",
        {
          transformOrigin: "50% 50%",
          scaleX: 1.5,
          repeat: 1,
          yoyo: true,
          ease: Power2.easeInOut,
          duration: 0.2,
        },
        "start+=0.2"
      );
  };

  useEffect(() => {
    //   click animation
    toggleTl.current = gsap
      .timeline({ paused: true, reversed: true })
      .to(".line2", { scaleX: 0, ease: Power2.easeInOut, duration: 0.125 }, 0)
      .to(
        ".line1",
        { y: 275, ease: Power2.easeInOut, duration: 0.25 },
        "combine"
      )
      .to(
        ".line3",
        { y: -275, ease: Power2.easeInOut, duration: 0.25 },
        "combine"
      )
      .to([".line1",".line3"], {
        rotate: "360deg",
        duration: 0.2,
        transformOrigin: "50% 50%",
      })
      .to(
        ".line1",
        { rotate: "315deg", ease: Power2.easeInOut, duration: 0.2 },
        "cross"
      )
      .to(
        ".line3",
        { rotate: "405deg", ease: Power2.easeInOut, duration: 0.2 },
        "cross"
      );
    return () => toggleTl.current.kill();
  }, []);

  useEffect(() => {
    striped ? toggleTl.current.reverse() : toggleTl.current.play();
  }, [striped]);

  const clickstriped = () => {

    setStriped((prevstriped) => !prevstriped);
  };

  return (
    <svg
      version="1.1"
      id="menu-svg"
      onMouseEnter={onEnter}
      onClick={clickstriped}
      ref={menuRef}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1550 800"
      style={{ "enable-background": "new 0 0 1550 800" }}
    >
      <path
        className="st0 lines line1 "
        d="M408.3,133.3c0-18.4,14.9-33.3,33.3-33.3h666.7c18.4,0,33.3,14.9,33.3,33.3s-14.9,33.3-33.3,33.3H441.7
	C423.3,166.7,408.3,151.7,408.3,133.3z"
      />
      <path
        className="st0 lines line2"
        d="M408.3,400c0-18.4,14.9-33.3,33.3-33.3h666.7c18.4,0,33.3,14.9,33.3,33.3c0,18.4-14.9,33.3-33.3,33.3H441.7
	C423.3,433.3,408.3,418.4,408.3,400z"
      />
      <path
        className="st0 lines line3"
        d="M408.3,666.7c0-18.4,14.9-33.3,33.3-33.3h666.7c18.4,0,33.3,14.9,33.3,33.3s-14.9,33.3-33.3,33.3H441.7
	C423.3,700,408.3,685.1,408.3,666.7z"
      />
    </svg>
  );
};
