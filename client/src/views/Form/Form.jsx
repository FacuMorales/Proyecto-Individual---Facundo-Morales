import { Link } from "react-router-dom";
import style from "./Form.module.css";

const Form = () => {
    return(
        <>
            <h1>Creador de driver</h1>
            <p>En esta seccion podras crear un nuevo driver seleccionando tus preferencias.</p>
            <p>Adelante!</p>
            <Link to={"/form/dates"}>
                <button>Empezar</button>
            </Link>
        </>
    );
};

export default Form;