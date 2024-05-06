import { useNavigate } from "react-router-dom";
import style from "./FormNationality.module.css";
import NationalityCard from "./NationalityCard";
import {countries} from "./countries";
import { useState } from "react";

const FormNationality = () => {
    const [nationality, setNationality] = useState(false);
    const navigate = useNavigate();
    const next = () => {
        navigate("/form/image");
    };
    return(
        <div className={style.container}>
            <h1 className={style.titulo}>Driver Creator</h1>
            <div></div>
            <h1 className={style.tituloPage}>Nationality:</h1>
            <div className={style.countries}>
            {
                countries.map(country=>{
                    return(
                        <NationalityCard
                        key={country.name}
                        name={country.name}
                        image={country.image}
                        setNationality={setNationality}
                        />
                    );
                })
            }
            </div>
            <div className={style.botonContainer}>
            {(nationality) ? (
                <button onClick={next} className={style.boton}>Siguiente</button>
            ) : (
                <button disabled className={style.boton}>Siguiente</button>
            )}
            </div>
        </div>
    );
};

export default FormNationality;