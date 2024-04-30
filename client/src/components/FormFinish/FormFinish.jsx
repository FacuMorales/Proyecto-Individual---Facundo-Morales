import { useNavigate } from "react-router-dom";
import style from "./FormFinish.module.css";
import { useEffect, useState } from "react";
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
        <>
            <h1>Creador de driver</h1>
            <h1>FormFinish</h1>

            <div className={style.container}>
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

            {(teams.length>=1) ? (
                <button onClick={next} >Finalizar</button>
            ) : (
                <button disabled>Finalizar</button>
            )}
        </>
    );
};

export default FormFinish;