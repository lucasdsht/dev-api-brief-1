const clients = require("../data/clients.json")
const crypto = require("crypto")

class ClientsService {
  getAllClients() {
    return clients
  }

  getClient(id) {
    const temp = clients.clients.find(x => x.id == id)
    console.log(temp)
    return temp
  }

  createClient(client) {
    const newClient = {
      id: crypto.randomUUID(),
      name: client.name,
      email: client.email,
      phone: client.phone
    }
    return (`Le client ${newClient?.name} a ete cree`)
  }

  modifyClient(id) {
    const client = this.getClient(id)

    return (`Les informations de ${client.name} ont ete mise a jour`)
  }

  makeReservation(id) {
    const client = this.getClient(id)

    return (`La reservation de ${client.name} a ete cree`)
  }
  deleteReservation(id) {
    const client = this.getClient(id)

    return (`La reservation de ${client.name} a ete supprimee`)
  }
}

module.exports = new ClientsService
