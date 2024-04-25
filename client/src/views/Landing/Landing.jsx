import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import imagenURL from "./fondo.jpg";

const Landing = () => {
    return(
        <div>
            <div className={style.container}>
                <h1 className={style.titulo}>Proyecto Individual Drivers</h1>
                <Link to="/home">
                        <button className={style.boton}>Home</button>
                </Link>
            </div>    
            <img src={imagenURL} className={style.imagen}/>
        </div>
    );
};

export default Landing;