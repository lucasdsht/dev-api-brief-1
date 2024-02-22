const express = require("express")

const router = express.Router()
const ClientsController = require("../controllers/clients.controller")

router.get("/", ClientsController.getAllClients)
router.get("/:id", ClientsController.getClientById)
router.post("/", ClientsController.createClients)
router.patch("/:id", ClientsController.modifyClient)
router.post("/reservation/:id", ClientsController.makeReservation)
router.delete("/reservation/:id", ClientsController.deleteReservation)


module.exports = router
