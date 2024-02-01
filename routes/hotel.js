const express = require("express")

const router = express.Router()
const HotelController = require("../controllers/hotel.controller")

router.get("/", HotelController.getHotelInfo)
router.get("/room/:id", HotelController.getRoomById)
router.post("/reservation/:id", HotelController.makeReservation)
router.delete("/reservation/:id", HotelController.deleteReservation)


module.exports = router

