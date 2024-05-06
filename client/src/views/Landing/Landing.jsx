import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import imagenURL from "./fondo.jpg";
import flecha from "./flecha.gif";
import formula from "./formula.png";

const Landing = () => {
    return(
        <div>
            <div className={style.container}>
                <img src={formula} className={style.auto}/>
                <h1 className={style.titulo}>Proyecto Individual Drivers</h1>
                <hr/>
                <h3>¡Bienvenido a mi Proyecto Individual de Henry!</h3>
                <h3>En él podras visualizar conductores de Fórmula 1, ver sus descripciones y además podrás crear tu propio conductor</h3>
                <h3>¡Adelante!</h3>
                <img src={flecha} className={style.flecha} />
                <Link to="/home">
                        <button className={style.boton}>Home</button>
                </Link>
            </div>    
            <img src={imagenURL} className={style.imagen}/>
        </div>
    );
};

export default Landing;