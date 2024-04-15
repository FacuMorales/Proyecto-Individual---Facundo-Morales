const imagenAleatoria = require("./imagenAleatoria");

const transformarDriverApi = async (driver) => {
    let image;
    if(!driver.image.url) image = imagenAleatoria();

    let teams = [];
    let apiTeams = driver.teams;
    if(apiTeams && apiTeams.includes(",")){
        let aux = apiTeams.split(",");
        for(let j=0;j<aux.length;j++){
            let name = aux[j].trim();
            teams.push({name});
        }
    }else{
        teams.push({name: driver.teams});
    }

    const apiDriver = {
        id: driver.id,
        name: driver.name.forename,
        surname: driver.name.surname,
        description: driver.description,
        image: image ? image : driver.image.url,
        nationality: driver.nationality,
        birthdate: driver.dob,
        Teams: teams
    };
    return apiDriver;
};

module.exports = transformarDriverApi;