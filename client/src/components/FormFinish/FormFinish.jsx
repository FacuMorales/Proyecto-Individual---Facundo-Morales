import { useNavigate } from "react-router-dom";
import style from "./FormFinish.module.css";
import { useState } from "react";
import axios from "axios";
import TeamsCard from "./TeamsCard"
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../../redux/actions";

const FormFinish = () => {
    const [teams, setTeams] = useState([]);
    const newDriver = useSelector(state => state.newDriver);
    const teamsData = useSelector(state => state.allTeams);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const next = async () => {
        try {
            const driver = {...newDriver, teams};
            await axios.post("http://localhost:3001/drivers", driver);
            await dispatch(getDrivers());
            navigate("/home");   
        } catch (error) {
            window.alert(error.message);
        }
    };

    return(
        <div className={style.container}>
            <h1 className={style.titulo}>Driver Creator</h1>
            <div></div>
            <h1 className={style.tituloPage}>Teams:</h1>

            <div className={style.teams}>
            {
                teamsData.map(team=>{
                    return(
                        <TeamsCard
                        key={team.id}
                        id={team.id}
                        name={team.name}
                        //image={team.image}
                        setTeams={setTeams}
                        teams={teams}
                        />
                    );
                })
            }
            </div>
            <div className={style.botonContainer}>
            {(teams.length>=1) ? (
                <button onClick={next} className={style.boton}>Finalizar</button>
            ) : (
                <button disabled className={style.boton}>Finalizar</button>
            )}
            </div>
        </div>
    );
};

export default FormFinish;