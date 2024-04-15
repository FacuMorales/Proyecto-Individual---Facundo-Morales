const { Router } = require("express");
const router = Router();

const getDrivers = require("../controllers/getDrivers");
const postDrivers = require("../controllers/postDrivers");
const getDriverById = require("../controllers/getDriverById");
const getDriverByName = require("../controllers/getDriverByName");
const getTeams = require("../controllers/getTeams");

router.get("/drivers", getDrivers);
router.post("/drivers", postDrivers);
router.get("/drivers/:idDriver", getDriverById);
router.get("/name", getDriverByName);
router.get("/teams", getTeams);

module.exports = router;
