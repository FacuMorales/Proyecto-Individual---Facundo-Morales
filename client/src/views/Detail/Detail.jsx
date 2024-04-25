import style from "./Detail.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Detail = () => {
    const [character, setCharacter] = useState({});
    const {id} = useParams();
    const URL = "http://localhost:3001/drivers/";

    useEffect(() => {
        axios(URL + id).then(
           ({ data }) => {
            setCharacter(data);
           }
        );
        return setCharacter({});
     }, [id]);

    return(
        <div>
            <h1>Detail</h1>
            <Link to={"/home"}>
                <button>Volver</button>
            </Link>
            <img src={character.image} className={style.imagen}/>
            <h2>{character.name} {character.surname}</h2>
            <h2>{character.description}</h2>
            <h2>{character.nationality}</h2>
            <h2>{character.birthdate}</h2>
            <div>
                {character.Teams && character.Teams.map(team => (
                    <h2 key={team.name}>{team.name}</h2>
                ))}
            </div>
        </div>
    );
};

export default Detail;