import style from "./TeamsCard.module.css";

const TeamsCard = ({id, name, image, setTeams, teams}) => {

    const handleTeams = () => {
        if(teams.includes(id)){
            const updatedTeams = teams.filter(teamId => teamId !== id);
            setTeams(updatedTeams);
        }else setTeams([...teams, id]);
    };

    return(
        <div className={`${style.container} ${teams.includes(id) ? style.selected : ''}`} onClick={handleTeams}>
            
            <h2>{name}</h2>
        </div>
    );
};

export default TeamsCard;