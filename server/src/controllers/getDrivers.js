const axios = require("axios");
const {Driver, Team} = require("../db");
const transformarDriverApi = require("../auxiliares/transformarDriverApi");
const URL = "http://localhost:5000/drivers";

const getDrivers = async (req, res) => {
    try {
        const myDrivers = await Driver.findAll({
            include: {
                model: Team,
                attributes: ["name"],
                through:{
                    attributes: []
                }
            }
        });

        const {data} = await axios(URL);
        const apiDrivers = [];
        for(let i=0; i<data.length;i++){
            const driver = await transformarDriverApi(data[i]);
            apiDrivers.push(driver);
        }
        const drivers = [...myDrivers, ...apiDrivers]
        return res.status(200).json(drivers);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = getDrivers;