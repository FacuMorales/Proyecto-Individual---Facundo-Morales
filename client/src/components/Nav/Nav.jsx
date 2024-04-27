import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { useState, useEffect } from "react";
import { actualPage, cleanDriversByName, getDriversByOrder, changeOption, changeOrder, } from "../../redux/actions";

const Nav = () => {
    const allDrivers = useSelector((state) => state.allDrivers);
    const allDriversByName = useSelector((state) => state.allDriversByName);
    const selectedOption = useSelector((state) => state.selectedOption);
    const order = useSelector((state) => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!selectedOption) return;
        handleChange({ target: { value: selectedOption } });
    }, [order, selectedOption]);

    const handleChange = (event) => {
        let selectedValue = event.target.value;
        if(selectedOption !== selectedValue) dispatch(actualPage(1));
        dispatch(changeOption(selectedValue));
        
        let drivers = [];
        let allDriversCopy = [];
        if(allDriversByName.length>=1) allDriversCopy = [...allDriversByName];
        if(allDriversByName.length===0) allDriversCopy = [...allDrivers];

        if(selectedOption==="alfabetico"){
            drivers = allDriversCopy.sort((a, b) => {
                const surnameA = a.surname.toLowerCase();
                const surnameB = b.surname.toLowerCase();
                if(order === "asc") return surnameA.localeCompare(surnameB);
                else return surnameB.localeCompare(surnameA);
            });
        }else{
            drivers = allDriversCopy.sort((a, b) => {
                const dateA = new Date(a.birthdate);
                const dateB = new Date(b.birthdate);
                if(order === "asc") return dateA - dateB;
                else return dateB - dateA;
            });
        };
        dispatch(getDriversByOrder(drivers));
    };

    const ascOrder = () => {
        dispatch(actualPage(1));
        dispatch(changeOrder("asc"));
    };

    const descOrder = () => {
        dispatch(actualPage(1));
        dispatch(changeOrder("desc"));
    };

    const reset = () =>{
        dispatch(cleanDriversByName([]));
        dispatch(getDriversByOrder([]));
        dispatch(changeOption(""));
        dispatch(actualPage(1));
    };

    return(
        <nav className={style.container}>
            <h2>NavBar</h2>
            <SearchBar></SearchBar>
            <Link to={"/form"}>
                <button>Form</button>
            </Link>
            <select value={selectedOption} onChange={handleChange}>
                <option value="">Ordernar por:</option>
                <option value="alfabetico">Orden alfabetico</option>
                <option value="fecha">Fecha de nacimiento</option>
            </select>
            {(selectedOption) ? (
                <div>
                    <button onClick={ascOrder}>Ascendente</button>
                    <button onClick={descOrder}>Descendente</button>
                </div>
            ) : (
                <div>
                    <button disabled>Ascendente</button>
                    <button disabled>Descendente</button>
                </div>
            )}
            
            <button onClick={reset}>Reset</button>
        </nav>
    );
};

export default Nav;