import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav className={style.container}>
            <h2>NavBar</h2>
            <SearchBar></SearchBar>
            <Link to={"/form"}>
                <button>Form</button>
            </Link>
        </nav>
    );
};

export default Nav;