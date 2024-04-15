const {Driver} = require("../db");
const imagenAleatoria = require("../auxiliares/imagenAleatoria");
const convertirName = require("../auxiliares/convertirName");

const postDrivers = async (req,res) => {
    let {name, surname, description, nationality, birthdate, teams} = req.body;
    if (!name || !surname || !description || !nationality || !birthdate || !teams) return res.status(400).json({error: "Faltan datos"});

    const image = imagenAleatoria();
    name = convertirName(name);
    try {
        const driver = await Driver.create({
            name, surname, description, nationality, birthdate, image
        });
        driver.addTeams(teams);
        return res.status(200).json(driver);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = postDrivers;