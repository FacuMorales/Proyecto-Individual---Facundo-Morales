import axios from "axios";

export const getDrivers = (page) => {
    const endpoint = `http://localhost:3001/drivers?page=${page}`;
    return async (dispatch) => {
        const {data} = await axios(endpoint);
        return dispatch({
            type: "getDrivers",
            payload: data
        });
    };
};

export const getDriversByName = (name) => {
    const endpoint = `http://localhost:3001/name?name=${name}`;
    return async (dispatch) => {
        try {
            const {data} = await axios(endpoint);
            return dispatch({
                type: "getDrivers",
                payload: data
            });
        } catch (error) {
            return dispatch({
                type: "error",
                payload: error
            });
        }
        
    };
};

export const cleanError = () => {
    return{
        type: "error",
        payload: "",
    };
};

export const actualPage = (page) => {
    return{
        type: "actualPage",
        payload: page
    };
};

export const addProp = (prop) => {
    return{
        type: "addProp",
        payload: prop
    };
};
