// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import  { useContext, useRef } from "react";
import { Menu } from "../../assets/SVG/Menu";
import { GlobalContext } from "../../context/Context";
import { Name_svg } from "../../assets/SVG/Name_svg";

export const NavBar = () => {

    let navRef = useRef(null);
    
    const {setStriped} = useContext(GlobalContext);

    const handleExpand = () =>{
        navRef.classList.toggle('expand');
    }
    const handleSelect =()=>{
        navRef.classList.remove('expand');
        setStriped(true);
    }

  return (
    <div className="navbar ps-5 pe-5 bg-black bg-opacity-75">
      <h3 className="pt-3">
        {`< `} <Name_svg/> {` />`}
      </h3>
      <nav ref={el=>navRef=el}>
        <a href="#skillset" className="nav-select skill" onClick={handleSelect}>
            <svg>
                <rect></rect>
            </svg>
            Skill
        </a>
        <a href="#portfolio" className="nav-select portfolio" onClick={handleSelect}>
            <svg>
                <rect></rect>
            </svg>
            Portfolio
        </a>
        <a href="#about" className="nav-select about" onClick={handleSelect}>
            <svg>
                <rect></rect>
            </svg>
            About
         </a>
        <a href="#contact" className="nav-select contact" onClick={handleSelect}>
            <svg>
                <rect></rect>
            </svg>
            Contact
         </a>
      </nav>
      <p className="menu-icon" onClick={handleExpand}>
        <Menu />
      </p>
    </div>
  );
};
