import { useNavigate } from "react-router-dom";
import style from "./FormImage.module.css";
import {images} from "./images";
import ImagesCard from "./ImagesCard";
import { useState } from "react";

const FormImage = () => {
    const [img, setImg] = useState(false);
    const navigate = useNavigate();
    const next = () => {
        navigate("/form/finish");
    };
    return(
        <div className={style.container}>
            <h1 className={style.titulo}>Driver Creator</h1>
            <div></div>
            <h1 className={style.tituloPage}>Image:</h1>

            <div className={style.image}>
            {
                images.map(image=>{
                    return(
                        <ImagesCard
                        image={image}
                        setImg={setImg}
                        />
                    );
                })
            }
            </div>

            <div className={style.botonContainer}>
            {(img) ? (
                <button onClick={next} className={style.boton}>Siguiente</button>
            ) : (
                <button disabled className={style.boton}>Siguiente</button>
            )}
            </div>
        </div>
    );
};

export default FormImage;