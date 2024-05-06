import style from "./Nav.module.css";
import formula from "../../views/Landing/formula.png"
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { actualPage, cleanDriversByName, getDriversByOrder, changeOption, changeOrder, changeFilter, changeTeam, getError } from "../../redux/actions";

const Nav = () => {
    const allDrivers = useSelector((state) => state.allDrivers);
    const allDriversByName = useSelector((state) => state.allDriversByName);
    const selectedOption = useSelector((state) => state.selectedOption);
    const selectedFilter = useSelector((state) => state.selectedFilter);
    const selectedTeam = useSelector((state) => state.selectedTeam);
    const order = useSelector((state) => state.order);
    const dispatch = useDispatch();

    const handleChangeOption = (event) => {
        const selectedValue = event.target.value;
        dispatch(changeOption(selectedValue));
    };

    const handleChangeOrder = (event) => {
        const order = event.target.value;
        dispatch(changeOrder(order));
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
        };
        if(selectedFilter==="bdd"){
            const driversFiltered = allDriversCopy.filter(driver => /[a-zA-Z]/.test(driver.id));
            allDriversCopy = [...driversFiltered];
        };

        if(selectedTeam){
            const driversFiltered = allDriversCopy.filter(driver =>
                driver.Teams.some(team => team.name === selectedTeam)
            );
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

        if(drivers.length===0) return window.alert("No hay drivers coincidentes");

        dispatch(actualPage(1));
        dispatch(getDriversByOrder(drivers));
    };

    const cleanTeam = () => {
        dispatch(changeTeam(""));
    };
 
    const reset = () =>{
        dispatch(cleanDriversByName([]));
        dispatch(getDriversByOrder([]));
        dispatch(changeOption(""));
        dispatch(changeFilter(""));
        dispatch(changeTeam(""));
        dispatch(changeOrder("asc"));
        dispatch(getError(""));
        dispatch(actualPage(1));
    };

    return(
        <nav className={style.container}>

            <div className={style.tituloContainer}>
                <h2 className={style.titulo}>Proyecto Individual Drivers</h2>
                <img src={formula} className={style.auto}/>
            </div>

            <div className={style.actionsContainer}>
                
                <select value={selectedOption} onChange={handleChangeOption} className={style.filter}>
                    <option value="">Ordernar según:</option>
                    <option value="alfabetico">Orden alfabetico</option>
                    <option value="fecha">Fecha de nacimiento</option>
                </select>
                
                <select value={order} onChange={handleChangeOrder} className={style.filter}>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                
                <select value={selectedFilter} onChange={handleChangeFilter} className={style.filter}>
                    <option value="">Todos</option>
                    <option value="api">Api Drivers</option>
                    <option value="bdd">Tus Drivers</option>
                </select>

                <div className={style.teamSearchForm}>
                    <div >
                        <Link to={"/form"}>
                            <button  className={style.form}>Crea tu Driver</button>
                        </Link>
                    </div>

                    <div className={style.team}>
                        <Link to={"/team"}>
                            <button onClick={cleanTeam} className={style.boton} >Elegir Team</button>
                        </Link>
                            <span className={style.teamSpan}>Team seleccionado: {selectedTeam}</span>
                    </div>

                    <div className={style.search}>
                        <SearchBar></SearchBar>
                    </div>
                </div>

                <div className={style.applyReset}>
                    <button onClick={apply} className={style.apply} >Aplicar</button>
                    <button onClick={reset} className={style.boton} >Reset</button>
                </div>

            </div>
        </nav>
    );
};

export default Nav;