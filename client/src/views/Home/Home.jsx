import Nav from "../../components/Nav/Nav";
import Cards from "../../components/Cards/Cards";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { actualPage, getDrivers, homeDrivers } from "../../redux/actions";

const Home = () => {
    const page = useSelector((state) => state.actualPage);
    const allDrivers = useSelector((state) => state.allDrivers);
    const allDriversByName = useSelector((state) => state.allDriversByName);
    const actualDrivers = useSelector((state) => state.actualDrivers);
    const dispatch = useDispatch();

    useEffect(()=>{
        const startIndex = (page - 1) * 9;
        const endIndex = startIndex + 9;
        if(allDriversByName.length>=1){
            const drivers = allDriversByName.slice(startIndex, endIndex);
            dispatch(homeDrivers(drivers));
        }else{
            const drivers = allDrivers.slice(startIndex, endIndex);
            dispatch(homeDrivers(drivers));
        }
    }, [page, allDriversByName, allDrivers]);

    const prevPage = () => {
        if(page===1) return;
        return dispatch(actualPage(page-1));
    };
    const nextPage = () => {
        return dispatch(actualPage(page + 1));
    };
    
    return(
        <div>
            <Nav></Nav>
            <h1>Home</h1>
            <Cards/>
            <div>
                <button onClick={prevPage}>anterior</button>
                <button onClick={nextPage}>siguiente</button>
            </div>
        </div>
    );
};

export default Home;