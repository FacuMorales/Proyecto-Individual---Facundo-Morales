import axios from "axios";

export const getDrivers = () => {
    const endpoint = "http://localhost:3001/drivers";
    return async (dispatch) => {
        const {data} = await axios(endpoint);
        return dispatch({
            type: "getDrivers",
            payload: data
        });
    };
};

export const getTeams = () => {
    const endpoint = "http://localhost:3001/teams";
    return async (dispatch) => {
        const {data} = await axios(endpoint);
        return dispatch({
            type: "getTeams",
            payload: data
        });
    };
};

export const homeDrivers = (drivers) => {
    return {
        type: "actualDrivers",
        payload: drivers
    };
};

export const getDriversByName = (name) => {
    const endpoint = `http://localhost:3001/name?name=${name}`;
    return async (dispatch) => {
        try {
            const {data} = await axios(endpoint);
            return dispatch({
                type: "allDriversByName",
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

export const cleanDriversByName = () => {
    return{
        type: "allDriversByName",
        payload: [],
    };
};

export const getDriversByOrder = (drivers) => {
    return{
        type: "allDriversByOrder",
        payload: drivers,
    };
};

export const changeFilter = (filter) => {
    return{
        type: "changeFilter",
        payload: filter,
    };
};

export const changeTeam = (team) => {
    return{
        type: "changeTeam",
        payload: team,
    };
};

export const changeOption = (option) => {
    return{
        type: "changeOption",
        payload: option,
    };
};

export const changeOrder = (order) => {
    return{
        type: "changeOrder",
        payload: order,
    };
};

export const getError = (error) => {
    return{
        type: "error",
        payload: error,
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
