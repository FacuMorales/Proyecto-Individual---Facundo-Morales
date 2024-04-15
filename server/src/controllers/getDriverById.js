const {Driver,Team} = require("../db");
const URL = "http://localhost:5000/drivers/";
const axios = require("axios");
const transformarDriverApi = require("../auxiliares/transformarDriverApi")

const getDriverById = async (req,res) => {
    const {idDriver} = req.params;
    try {
        if(idDriver.length <= 4){
            const {data} = await axios(URL + `${idDriver}`);
            const driver = await transformarDriverApi(data);
            return res.status(200).json(driver);
        }else{
            const driver = await Driver.findByPk(idDriver, {
                include: {
                    model: Team,
                    attributes: ["name"],
                    through:{
                        attributes: []
                    }
                }
            });
            return res.status(200).json(driver);
        }
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = getDriverById;