import style from "./FormDates.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { useState } from "react";
import { addProp } from "../../redux/actions";
import { datesValidation } from "./datesValidation";

const FormDates = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [driverData, setDriverData] = useState({
        name:"",
        surname:"",
        birthdate: "",
        description: ""
    });
    const [errors, setErrors] = useState({
        name:"",
        surname:"",
        birthdate: "",
        description: ""
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errors.name && !errors.surname && !errors.birthdate && !errors.description){
            dispatch(addProp(driverData));
            navigate("/form/nationality");
        }
    };
    const handleChange = (event) => {
        const property = event.target.name;
        setDriverData({...driverData, [property]: event.target.value});
        datesValidation(errors,setErrors,property,event.target.value);
    };

    return(
        <div className={style.container}>
            <h1 className={style.titulo}>Driver Creator</h1>
            <div></div>
            <h1 className={style.tituloPage}>Dates:</h1>
            <div></div>
            <form onSubmit={handleSubmit} className={style.datesContainer}>
                <div className={style.searchContainer}>
                <label htmlFor="name" >Nombre: </label>
                <input type="text" id="name" name="name"  value={driverData.name} onChange={handleChange} placeholder="Lewis" className={style.search}/>
                <span className={style.span}>{errors.name}</span>
                </div>

                <div className={style.searchContainer}>
                <label htmlFor="surname" >Apellido: </label>
                <input type="text" id="surname" name="surname"  value={driverData.surname} onChange={handleChange} placeholder="Hamilton" className={style.search}/>
                <span className={style.span}>{errors.surname}</span>
                </div>

                <div className={style.searchContainer}>
                <label htmlFor="birthdate" >Fecha de nacimiento: </label>
                <input type="date" id="birthdate" name="birthdate"  value={driverData.birthdate} onChange={handleChange} placeholder="01-01-01" className={style.search}/>
                <span className={style.span}>{errors.birthdate}</span>
                </div>

                <div className={style.searchContainer}>
                <label htmlFor="description" >Descripcion: </label>
                <input type="text" id="description" name="description"  value={driverData.description} onChange={handleChange} placeholder="..." className={style.search}/>
                <span className={style.span}>{errors.description}</span>
                </div>

                <div className={style.botonContainer}>
                {(!errors.name && !errors.surname && !errors.birthdate && !errors.description && driverData.name && driverData.surname && driverData.birthdate && driverData.description) ? (
                    <button type="submit" className={style.boton}>Siguiente</button>
                ) : (
                    <button type="submit" disabled className={style.boton}>Siguiente</button>
                )}
                </div>
            </form>
        </div>
    );
};

export default FormDates;

