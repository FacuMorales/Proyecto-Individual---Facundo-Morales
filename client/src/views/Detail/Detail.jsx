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
        <div className={style.container}>
            <nav className={style.nav}>
                <Link to={"/home"}>
                    <button className={style.boton}>Volver</button>
                </Link>
            </nav>
            <div className={style.allContainer}>
                <img src={character.image} className={style.imagen}/>
                <div className={style.infoContainer}>
                    <h1 className={style.name}>{character.name} {character.surname}</h1>
                    <h2>{character.description}</h2>
                    <hr/>
                    <div className={style.dataContainer}>
                        <div>
                            <h2>Nationility: {character.nationality}</h2>
                            <h2>Birthdate: {character.birthdate}</h2>
                        </div>
                        <div className={style.teams}>
                            <h2>Teams:</h2>
                            {character.Teams && character.Teams.map(team => (
                                <h2 key={team.name}>{team.name}</h2>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;