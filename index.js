const express = require("express")
const clientsRouter = require("./routes/clients")
const hotelRouter = require("./routes/hotel")

const app = express()
app.use(express.json())
const port = 3000

app.use("/clients", clientsRouter)
app.use("/hotel", hotelRouter)

app.listen(port, () => console.log("Server listening"))

