// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { NavBar } from "../Header/NavBar";
import { SearchBox } from "../Header/SearchBox";
import { Main } from "./Main";

export const Home = () => {
    
    return (
        <>
            <NavBar/>
            <div className="divider bg-success-subtle rounded-top">
                    <p className='d-sm-none'><SearchBox/></p>
            </div>
            <div className="divider bg-info-subtle rounded-bottom"></div>
            <Main/>
        </>
    );
};
