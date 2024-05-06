import { Link } from "react-router-dom";
import style from "./Form.module.css";

const Form = () => {
    return(
        <div className={style.container}>
            <div className={style.infoContainer}>
            <h1>Driver Creator</h1>
            <hr/>
            <p>En esta seccion podras crear un nuevo driver seleccionando tus preferencias.</p>
            <p>Adelante!</p>
            <Link to={"/form/dates"}>
                <button className={style.boton}>Empezar</button>
            </Link>
            </div>
        </div>
    );
};

export default Form;