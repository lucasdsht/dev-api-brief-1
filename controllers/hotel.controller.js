const HotelServices = require("../services/hotel.service")
class HotelController {
  getHotelInfo(req, res) {
    const clients = HotelServices.getHotelInfo()
    res.json(clients);
  }

  getRoomById(req, res) {
    const client = HotelServices.getRoom(req.params.id)
    res.json(client);
  }

  makeReservation(req, res) {
    const reservation = HotelServices.makeReservation(req.params.id)
    res.json(reservation)
  }
  deleteReservation(req, res) {
    const reservation = HotelServices.deleteReservation(req.params.id)
    res.json(reservation)
  }
}

module.exports = new HotelController();


