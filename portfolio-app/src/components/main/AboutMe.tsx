import '../../styles/App.scss'
import { BsAirplaneEngines } from 'react-icons/bs'

export const AboutMe = () => {
  return (
    <div className="about-section" id='about'>
      <div className="text-container border border-warning rounded-2">
        
        <div className="row row-cols-1 row-cols-md-2 h-90">
          <div className="col col-12 col-md-3 ">
            <h1 className='h-100
            '>About Me<BsAirplaneEngines className="ms-4" /></h1>
          </div>
          <div className="col col-12 col-lg-9">
            <div className="row">
              <div className="col-12">
                <p>
                  在我決定轉換跑道後，全心投入網頁全端技術、程式語言相關，在今年 112/01/30參加職訓局的「跨平台網站設置與應用班」為期半年900小時的訓練、加上自學 React.js 前端框架 、Spring Boot 後端框架、MySQL關聯式資料庫等等。目標是成為高技術、有質量的工程師。
                </p>
              </div>
              <div className="col-12">
                <p>
                  經過半年的職訓局訓練和自身的額外學習，打下開發網站的基礎。自己研究 React.js框架、SpringBoot框架和關聯式資料庫後，已能在自己的專案練習中應用。最後研究Amazon Web Services (AWS) Cloud ，使用其 EC2 虛擬伺服器來部署自己的 Full-Stack Project。除了學習這些工具和技能之外，最重要的是在這段時間自我學習的過程中培養了自己尋找資源、解決問題的能力。
                </p>
              </div>
              <div className="col-12">
                <p>
                  為了豐富技能，我另外自學 Gsap和Particles.js等動畫工具，這些工具為網站帶來更加生動的效果。而程式語言的部分，我利用 3wSchool 學習網站自學 Java、TypeScript等程式語言，並參加中興大學推廣教育的 Python 入門班，這為我的專案開發帶來更多可能性。
                </p>
              </div>
              <div className="col-12">
                <p>
                  我對於成為一名優秀的工程師充滿著熱情和決心。我將持續不斷地學習和成長，不僅在技術層面不斷提升自己，努力將創意和熱情注入每一個項目中。
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
