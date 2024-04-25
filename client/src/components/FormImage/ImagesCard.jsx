import style from "./ImagesCard.module.css";
import { addProp } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const ImagesCard = ({image, setImg}) => {
    const [selected, setSelected] = useState(false);
    const selectedImage = useSelector((state) => state.newDriver.image);

    const dispatch = useDispatch();
    const handleImage = () => {
        dispatch(addProp({image}));
        setSelected(true);
        setImg(true);
    };

    useEffect(() => {
        if (selectedImage !== image) {
            setSelected(false);
        }
    }, [selectedImage, image]);

    return(
        <div className={`${style.container} ${selected ? style.selected : ""}`} onClick={handleImage}>
            <img src={image} className={style.imagen}/>
        </div>
    );
};

export default ImagesCard;