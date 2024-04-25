import style from "./NationalityCard.module.css";
import { addProp } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const NationalityCard = ({name, image, setNationality}) => {
    const [selected, setSelected] = useState(false);
    const selectedNationality = useSelector((state) => state.newDriver.nationality);

    const dispatch = useDispatch();
    const handleNationality = () => {
        dispatch(addProp({nationality: name}));
        setSelected(true);
        setNationality(true);
    };

    useEffect(() => {
        if (selectedNationality !== name) {
            setSelected(false);
        }
    }, [selectedNationality, name]);

    return(
        <div className={`${style.container} ${selected ? style.selected : ""}`} onClick={handleNationality}>
            <img src={image} className={style.imagen}/>
            <h2>{name}</h2>
        </div>
    );
};

export default NationalityCard;