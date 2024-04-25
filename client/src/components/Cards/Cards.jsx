import style from "./Cards.module.css";
import Card from "../Card/Card";
import {useDispatch, useSelector} from 'react-redux';
import { cleanError } from "../../redux/actions";

const Cards = () => {
    const drivers = useSelector((state) => state.actualDrivers);
    const error = useSelector((state) => state.error);
    const dispatch = useDispatch();

    if(error){
        window.alert(error.response.data);
        dispatch(cleanError());
    } 

    return(
        <div className={style.container}>
            {
                drivers.map(driver=>{
                    return(
                        <Card
                        key={driver.id}
                        id={driver.id}
                        image={driver.image}
                        name={driver.name}
                        surname={driver.surname}
                        teams={driver.Teams}
                        />
                    );
                })
            }
        </div>
    )
};

export default Cards;