import style from "./Home.module.css"
import Nav from "../../components/Nav/Nav";
import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { actualPage, homeDrivers } from "../../redux/actions";

const Home = () => {
    const page = useSelector((state) => state.actualPage);
    const allDrivers = useSelector((state) => state.allDrivers);
    const allDriversByName = useSelector((state) => state.allDriversByName);
    const allDriversByOrder = useSelector((state) => state.allDriversByOrder);
    const dispatch = useDispatch();

    useEffect(()=>{
        window.scrollTo(0, 0);
        const startIndex = (page - 1) * 9;
        const endIndex = startIndex + 9;
        let drivers = [];
        if(allDriversByName.length>=1){
            drivers = allDriversByName.slice(startIndex, endIndex);
            dispatch(homeDrivers(drivers));
        }
        if(allDriversByOrder.length>=1){
            drivers = allDriversByOrder.slice(startIndex, endIndex);
            dispatch(homeDrivers(drivers));
        }
        if(allDriversByName.length===0 && allDriversByOrder.length===0){
            drivers = allDrivers.slice(startIndex, endIndex);
            dispatch(homeDrivers(drivers));
        }
        if(drivers.length===0){
            window.alert("No hay mas drivers para mostrar");
            dispatch(actualPage(page-1));
        }
    }, [page, allDriversByName, allDrivers, allDriversByOrder]);

    const prevPage = () => {
        if(page===1) return;
        return dispatch(actualPage(page-1));
    };
    const nextPage = () => {
        dispatch(actualPage(page + 1));
    };
    
    return(
        <div className={style.container} >
            <Nav></Nav>
            <div className={style.buttonContainer}>
                <span className={style.pageContainer}>{page-1}</span>
                <button onClick={prevPage} className={style.boton}>{"<<< anterior"}</button>
                <span className={style.pageContainer}>{page}</span>
                <button onClick={nextPage} className={style.boton}>{"siguiente >>>"}</button>
                <span className={style.pageContainer}>{page+1}</span>
            </div>
            <Cards/>
            <div className={style.buttonContainer}>
                <span className={style.pageContainer}>{page-1}</span>
                <button onClick={prevPage} className={style.boton}>{"<<< anterior"}</button>
                <span className={style.pageContainer}>{page}</span>
                <button onClick={nextPage} className={style.boton}>{"siguiente >>>"}</button>
                <span className={style.pageContainer}>{page+1}</span>
            </div>
        </div>
    );
};

export default Home;