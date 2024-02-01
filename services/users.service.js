const clients = require("../data/clients.json")

class ClientsService {
  getAllClients() {
    return clients
  }

  getClient(id) {
    const temp = clients.clients.find(x => x.id == id)
    console.log(temp)
    return temp
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
