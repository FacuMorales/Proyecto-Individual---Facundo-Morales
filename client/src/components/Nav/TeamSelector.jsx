import style from "./TeamSelector.module.css";
import { useSelector } from "react-redux";
import TeamSelectorCard from "./TeamSelectorCard";
import { useNavigate } from "react-router-dom";

const TeamSelector = () => {
    const teamsData = useSelector(state => state.allTeams);
    const selectedTeam = useSelector(state => state.selectedTeam);
    const navigate = useNavigate();

    const filtrar = () => {
        navigate("/home");
    };

    return(
        <div>
            <h2>Team Selector</h2>

            <div className={style.container}>
            {
                teamsData.map(team=>{
                    return(
                        <TeamSelectorCard
                        key={team.id}
                        name={team.name}
                        //image={team.image}
                        />
                    );
                })
            }
            </div>

            {(selectedTeam.length>=1) ? (
                <button onClick={filtrar} >Seleccionar Team</button>
            ) : (
                <button disabled>Seleccionar Team</button>
            )}
        </div>
    );
};

export default TeamSelector;