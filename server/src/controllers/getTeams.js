const {Team} = require("../db");
const URL = "http://localhost:5000/drivers/";
const axios = require("axios");

const getTeams = async (req,res) => {
    try {
        const {data} = await axios(URL);
        let teams = [];
        for(let i=0; i<data.length; i++){
            let apiTeams = data[i].teams;
            let aux;
            if(apiTeams && apiTeams.includes(",")){
                aux = apiTeams.split(",");
                teams = [...teams, ...aux];
            }else{
                aux = apiTeams;
                teams = [...teams, aux];
            }
        }
        for(let j=0; j<teams.length;j++){
            let nameApi = teams[j];
            if(nameApi){
                let name = nameApi.trim();
                await Team.findOrCreate({where: {name}});
            }
        }
            const teamsDb = await Team.findAll();
            return res.status(200).json(teamsDb);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = getTeams;