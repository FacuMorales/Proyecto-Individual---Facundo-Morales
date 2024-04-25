import Nav from "../../components/Nav/Nav";
import Cards from "../../components/Cards/Cards";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { actualPage, getDrivers } from "../../redux/actions";

const Home = () => {
    const page = useSelector((state) => state.actualPage);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(page!==0) dispatch(getDrivers(page));
        console.log(page);
    }, [page]);

    const prevPage = () => {
        if(page===1) return;
        return dispatch(actualPage(page-1));
    };
    const nextPage = () => {
        return dispatch(actualPage(page+1))
    };
    
    return(
        <div>
            <Nav></Nav>
            <h1>Home</h1>
            <Cards/>
            {(page!==0) ? (
                <div>
                    <button onClick={prevPage}>anterior</button>
                    <button onClick={nextPage}>siguiente</button>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Home;