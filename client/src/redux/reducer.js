const initialState = {
    allDrivers: [],
    allDriversByName: [],
    allDriversByOrder: [],
    actualDrivers : [],
    selectedOption: "",
    selectedFilter: "",
    order: "asc",
    actualPage: 1,
    newDriver: {},
    error: "",
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "getDrivers":
            return {...state, allDrivers: action.payload};

        case "actualDrivers":
            return {...state, actualDrivers: action.payload};

        case "allDriversByName":
            return {...state, allDriversByName: action.payload};

        case "allDriversByOrder":
            return {...state, allDriversByOrder: action.payload};

        case "changeFilter":
            return {...state, selectedFilter: action.payload};

        case "changeOption":
            return {...state, selectedOption: action.payload};

        case "changeOrder":
            return {...state, order: action.payload};

        case "error":
            return  {...state, error: action.payload};

        case "actualPage":
            return {...state, actualPage: action.payload};

        case "addProp":
            return {...state, newDriver: {...state.newDriver, ...action.payload}};

        default: return {...state};
    };
};

export default rootReducer;