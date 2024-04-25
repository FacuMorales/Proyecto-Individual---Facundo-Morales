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
        <>
            <h1>Creador de driver</h1>
            <h1>FormDates</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name" >Nombre:</label>
                <input type="text" id="name" name="name"  value={driverData.name} onChange={handleChange} placeholder="Lewis"/>
                <span >{errors.name}</span>

                <label htmlFor="surname" >Apellido:</label>
                <input type="text" id="surname" name="surname"  value={driverData.surname} onChange={handleChange} placeholder="Hamilton"/>
                <span >{errors.surname}</span>

                <label htmlFor="birthdate" >Fecha de nacimiento:</label>
                <input type="date" id="birthdate" name="birthdate"  value={driverData.birthdate} onChange={handleChange} placeholder="01-01-01"/>
                <span >{errors.birthdate}</span>

                <label htmlFor="description" >Descripcion:</label>
                <input type="text" id="description" name="description"  value={driverData.description} onChange={handleChange} placeholder="..."/>
                <span >{errors.description}</span>

                {(!errors.name && !errors.surname && !errors.birthdate && !errors.description && driverData.name && driverData.surname && driverData.birthdate && driverData.description) ? (
                    <button type="submit" >Siguiente</button>
                ) : (
                    <button type="submit" disabled>Siguiente</button>
                )}
            </form>
        </>
    );
};

export default FormDates;

