import { useEffect, useState } from "react";
import { changeTeam } from "../../redux/actions";
import style from "./TeamSelectorCard.module.css";
import { useDispatch, useSelector} from "react-redux";

const TeamSelectorCard = ({name}) => {
    const [selected, setSelected] = useState(false);
    const selectedTeam = useSelector(state => state.selectedTeam);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedTeam !== name) {
            setSelected(false);
        }
    }, [selectedTeam, name]);

    const handleTeam = () => {
        dispatch(changeTeam(name));
        setSelected(true);
    };

    return(
        <div className={`${style.container} ${selected ? style.selected : ""}`} onClick={handleTeam}>
            <h2>{name}</h2>
        </div>
    );
};

export default TeamSelectorCard;