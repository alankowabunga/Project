
import '../../styles/App.scss'
import { FullDesk_svg } from '../../assets/SVG/FullDesk_svg'
import 'bootstrap/dist/css/bootstrap.css'
import { useTypewriter, Cursor } from "react-simple-typewriter"

export const IntroSection = () => {

  const [text] = useTypewriter({
    words: ["Chen Yu Jen", "陳昱任"],
    loop: -1,
    typeSpeed: 60,
    deleteSpeed: 50,
    delaySpeed: 3000,
  });

  return (
    <>
      <div className='intro bg-black bg-opacity-75 p-4 pt-lg-5 ps-lg-5'>
        <div className="row mb-4">
          <div className="col offset-sm-1 offset-lg-2">
            <h1>Hello, I'm <span className='text-warning'>{text}</span> <Cursor/></h1>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col offset-1 offset-lg-2  col-md-5 col-lg-4">
            <h3 className='text-start'>I'm Into Web Develop</h3>

          </div>
          <div className="col">
            <div className="svg-container">
              <FullDesk_svg/>
            </div>
          </div>
        </div>
        
      </div>
     
    </>

  )
}
