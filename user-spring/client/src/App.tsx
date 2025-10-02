// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line 
import "./App.css";
import { AddUser } from "./components/User/AddUser.jsx";
import { ViewUser } from "./components/User/ViewUser.js";
import { EditUser } from "./components/User/EditUser.js";
import { Navbar } from "./components/Main/Navbar.js";
import { Home } from "./components/Main/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParticlesBackground } from "./animation/ParticlesBackground.js";
import { useContext} from "react";
import { FadeLoader } from "react-spinners";
import { InputContext } from "./components/Context/Context.js";

function App() {

    const { loading } = useContext(InputContext);

    return (
        <>
            {
                loading ? (
                    <div className="preloader-container">
                        <FadeLoader color="rgba(255, 206, 130, 1)" size={70} />
                    </div>
                ) :
                    <div className="app">
                        <ParticlesBackground />
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/navbar" element={<Navbar />} />
                                <Route path="/adduser" element={<AddUser />} />
                                <Route path="/viewuser" element={<ViewUser />} />
                                <Route path="/edituser/:id" element={<EditUser />} />
                                <Route path="/viewuser/:id2" element={<ViewUser />} />
                            </Routes>
                        </BrowserRouter>
                    </div >
            }
        </>
    );
}

export default App;
