const {Driver, Team} = require("../db");
const URL = "http://localhost:5000/drivers";
const axios = require("axios");
const convertirName = require("../auxiliares/convertirName");
const transformarDriverApi = require("../auxiliares/transformarDriverApi");

const getDriverByName = async (req, res) => {
    let {name} = req.query;
    if(name){
        name = convertirName(name);
        let drivers = [];
        try {
            drivers = await Driver.findAll({
                where: {name},
                include: {
                    model: Team,
                    attributes: ["name"],
                    through:{
                        attributes: []
                    }
                },
                limit: 15
            });
            if(drivers.length < 15){
                const {data} = await axios(`${URL}?name.forename=${name}`);
                for(let i=0; i<data.length && drivers.length<15; i++){
                    const driverApi = await transformarDriverApi(data[i]);
                    drivers.push(driverApi);
                }
            }
            if(drivers.length === 0) return res.status(404).send("No se encontró ningun driver coincidente");
            return res.status(200).json(drivers);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    }else{
        return res.status(400).json({error: "Faltan datos"});
    }
};

module.exports = getDriverByName;