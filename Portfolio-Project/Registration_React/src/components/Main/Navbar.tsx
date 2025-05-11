
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { PlaceholderText } from "../SubComponent/PlaceholderText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCardClip } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary p-2 mb-5 mt-3">
            <div className="container-fluid flex-column flex-sm-row mb-sm-0">
                <Link to="/" className="navbar-brand fs-4 badge bg-success mb-sm-0 mb-3">
                    <FontAwesomeIcon icon={faIdCardClip} /> Personnel - System
                </Link>
                <form className="d-flex" role="search">
                    <PlaceholderText />
                    <Link
                        to="/adduser"
                        className="btn btn btn-outline-warning "
                    >
                        <pre className="my-auto">Add User</pre>
                    </Link>
                </form>
            </div>
        </nav>
    );
};
