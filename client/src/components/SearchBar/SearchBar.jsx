import { useDispatch } from "react-redux";
import { datesValidation } from "../FormDates/datesValidation";
import style from "./SearchBar.module.css";
import { useState } from "react";
import { actualPage, getDriversByName, getDriversByOrder } from "../../redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [driverName, setDriverName] = useState({
        name:""
    });
    const [errors, setErrors] = useState({
        name:""
    });
    const handleChange = (event) => {
        const property = event.target.name;
        setDriverName({[property]: event.target.value});
        datesValidation(errors,setErrors,property,event.target.value);
    };
    const handleSearch = () => {
        dispatch(actualPage(1));
        dispatch(getDriversByOrder([]));
        dispatch(getDriversByName(driverName.name));
    };
    return(
        <div className={style.container}>
            <h2>SearchBar</h2>
            <input type="text" id="name" name="name" value={driverName.name} onChange={handleChange} placeholder="Lewis"/>
            <span >{errors.name}</span>
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};

export default SearchBar;