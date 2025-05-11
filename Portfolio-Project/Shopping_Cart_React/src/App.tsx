import "./App.css";
import { Home } from "./components/Main/Home";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Header/NavBar";
import { CartPage } from "./components/ExtendComponents/CartPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/navbar" element={<NavBar />} />
                <Route path="/cartpage" element={<CartPage />} />
            </Routes>
        </>
    );
}

export default App;
