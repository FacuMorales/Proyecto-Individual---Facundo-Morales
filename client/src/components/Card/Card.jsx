import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
    return(
        <div className={style.container}>
            <img src={props.image} className={style.imagen}/>
            <Link to={`/detail/${props.id}`} className={style.link}>
                <h2>{props.name} {props.surname}</h2>
            </Link>
            <div>
                {
                    props.teams.map(team=>{
                        return(
                            <h2>{team.name}</h2>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Card;