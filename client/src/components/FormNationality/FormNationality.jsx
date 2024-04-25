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
        <>
            <h1>Creador de driver</h1>
            <h1>FormNationality</h1>
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

            {(nationality) ? (
                <button onClick={next} >Siguiente</button>
            ) : (
                <button disabled>Siguiente</button>
            )}
        </>
    );
};

export default FormNationality;