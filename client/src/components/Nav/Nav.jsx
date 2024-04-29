import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { useState, useEffect } from "react";
import { actualPage, cleanDriversByName, getDriversByOrder, changeOption, changeOrder, changeFilter } from "../../redux/actions";

const Nav = () => {
    const allDrivers = useSelector((state) => state.allDrivers);
    const allDriversByName = useSelector((state) => state.allDriversByName);
    const selectedOption = useSelector((state) => state.selectedOption);
    const selectedFilter = useSelector((state) => state.selectedFilter);
    const order = useSelector((state) => state.order);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if(!selectedOption) return;
    //     handleChangeOption({ target: { value: selectedOption } });
    //     handleChangeFilter({ target: { value: selectedFilter } });
    // }, [order, selectedOption, selectedFilter]);

    const handleChangeOption = (event) => {
        let selectedValue = event.target.value;
        dispatch(changeOption(selectedValue));
    };

    const ascOrder = () => {
        dispatch(changeOrder("asc"));
    };

    const descOrder = () => {
        dispatch(changeOrder("desc"));
    };

    const handleChangeFilter = (event) => {
        const filter = event.target.value;
        dispatch(changeFilter(filter));
    };

    const apply = () => {
        let drivers = [];
        let allDriversCopy = [];
        if(allDriversByName.length>=1) allDriversCopy = [...allDriversByName];
        if(allDriversByName.length===0) allDriversCopy = [...allDrivers];

        if(selectedFilter==="api"){
            const driversFiltered = allDriversCopy.filter(driver => !/[a-zA-Z]/.test(driver.id));
            allDriversCopy = [...driversFiltered];
            console.log("hola");
        };
        if(selectedFilter==="bdd"){
            const driversFiltered = allDriversCopy.filter(driver => /[a-zA-Z]/.test(driver.id));
            allDriversCopy = [...driversFiltered];
        };

        if(selectedOption==="alfabetico"){
            drivers = allDriversCopy.sort((a, b) => {
                const surnameA = a.surname.toLowerCase();
                const surnameB = b.surname.toLowerCase();
                if(order === "asc") return surnameA.localeCompare(surnameB);
                else return surnameB.localeCompare(surnameA);
            });
        };
        if(selectedOption==="fecha"){
            drivers = allDriversCopy.sort((a, b) => {
                const dateA = new Date(a.birthdate);
                const dateB = new Date(b.birthdate);
                if(order === "asc") return dateA - dateB;
                else return dateB - dateA;
            });
        };
        if(!selectedOption) drivers = allDriversCopy;

        dispatch(actualPage(1));
        dispatch(getDriversByOrder(drivers));
    };
 
    const reset = () =>{
        dispatch(cleanDriversByName([]));
        dispatch(getDriversByOrder([]));
        dispatch(changeOption(""));
        dispatch(changeFilter(""));
        dispatch(changeOrder("asc"));
        dispatch(actualPage(1));
    };

    return(
        <nav className={style.container}>
            <h2>NavBar</h2>
            <SearchBar></SearchBar>
            <Link to={"/form"}>
                <button>Form</button>
            </Link>

            <select value={selectedOption} onChange={handleChangeOption}>
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

            <select value={selectedFilter} onChange={handleChangeFilter}>
                <option value="">Filtrar por:</option>
                <option value="api">Api Drivers</option>
                <option value="bdd">Tus Drivers</option>
            </select>

            <button onClick={apply}>Aplicar</button>
            <button onClick={reset}>Reset</button>
        </nav>
    );
};

export default Nav;