const hotel = require("../data/hotel.json")

class HotelServices {
  getHotelInfo() {
    const info = {
      nom: hotel.name,
      contact: hotel.contact,
      location: hotel.location,
      facilities: hotel.facilities
    }
    return (info)
  }

  getAllRooms() {
    return (hotel.rooms)
  }

  getRoom(id) {
    const temp = hotel.rooms.find(x => x.id == id)
    console.log(temp)
    return temp
  }

  makeReservation(id) {
    const room = this.getRoom(id)

    return (`La reservation de le chambre ${room.name} a ete cree`)
  }
  deleteReservation(id) {
    const room = this.getRoom(id)

    return (`La reservation de la chambre ${room.name} a ete supprimee`)
  }
}

module.exports = new HotelServices
