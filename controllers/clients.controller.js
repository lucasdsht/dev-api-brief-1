const ClientsServices = require("../services/users.service")
class ClientsController {
  getAllClients(req, res) {
    const clients = ClientsServices.getAllClients()
    res.json(clients);
  }

  getClientById(req, res) {
    const client = ClientsServices.getClient(req.params.id)
    res.json(client);
  }

  createClients(req, res) {
    const client = ClientsServices.createClient(req.body)
    res.json(client)
  }

  modifyClient(req, res) {
    const client = ClientsServices.modifyClient(req.params.id)
    res.json(client)
  }

  makeReservation(req, res) {
    const reservation = ClientsServices.makeReservation(req.params.id)
    res.json(reservation)
  }
  deleteReservation(req, res) {
    const reservation = ClientsServices.deleteReservation(req.params.id)
    res.json(reservation)
  }
}

module.exports = new ClientsController();

