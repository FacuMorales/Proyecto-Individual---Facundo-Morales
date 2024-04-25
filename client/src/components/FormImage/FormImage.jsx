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
        <>
            <h1>Creador de driver</h1>
            <h1>FormImage</h1>

            <div className={style.container}>
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

            {(img) ? (
                <button onClick={next} >Siguiente</button>
            ) : (
                <button disabled>Siguiente</button>
            )}
        </>
    );
};

export default FormImage;