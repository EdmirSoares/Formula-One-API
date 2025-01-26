import fastify from "fastify";
import cors from "@fastify/cors"

interface DriverParams {
    id: string
}


const server = fastify({
    logger: true
})
server.register(cors, {
    origin: "http://localhost:3333"
})

const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Ferrari", base: "Maranello, Italy" },
    { id: 3, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 4, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 5, name: "Alpine", base: "Enstone, United Kingdom" },
    { id: 6, name: "AlphaTauri", base: "Faenza, Italy" },
    { id: 7, name: "Aston Martin", base: "Silverstone, United Kingdom" },
    { id: 8, name: "Williams", base: "Grove, United Kingdom" },
    { id: 9, name: "Alfa Romeo", base: "Hinwil, Switzerland" },
    { id: 10, name: "Haas", base: "Kannapolis, United States" }
]

const drivers = [
    { id: 1, name: "Lewis Hamilton", team: "Mercedes", role: "Principal" },
    { id: 2, name: "George Russell", team: "Mercedes", role: "Secundário" },
    { id: 3, name: "Max Verstappen", team: "Red Bull Racing", role: "Principal" },
    { id: 4, name: "Sergio Perez", team: "Red Bull Racing", role: "Secundário" },
    { id: 5, name: "Charles Leclerc", team: "Ferrari", role: "Principal" },
    { id: 6, name: "Carlos Sainz", team: "Ferrari", role: "Secundário" },
    { id: 7, name: "Lando Norris", team: "McLaren", role: "Principal" },
    { id: 8, name: "Oscar Piastri", team: "McLaren", role: "Secundário" },
    { id: 9, name: "Fernando Alonso", team: "Alpine", role: "Principal" },
    { id: 10, name: "Esteban Ocon", team: "Alpine", role: "Secundário" },
    { id: 11, name: "Pierre Gasly", team: "AlphaTauri", role: "Principal" },
    { id: 12, name: "Yuki Tsunoda", team: "AlphaTauri", role: "Secundário" },
    { id: 13, name: "Sebastian Vettel", team: "Aston Martin", role: "Principal" },
    { id: 14, name: "Lance Stroll", team: "Aston Martin", role: "Secundário" },
    { id: 15, name: "Nicholas Latifi", team: "Williams", role: "Principal" },
    { id: 16, name: "Alexander Albon", team: "Williams", role: "Secundário" },
    { id: 17, name: "Valtteri Bottas", team: "Alfa Romeo", role: "Principal" },
    { id: 18, name: "Guanyu Zhou", team: "Alfa Romeo", role: "Secundário" },
    { id: 19, name: "Mick Schumacher", team: "Haas", role: "Principal" },
    { id: 20, name: "Kevin Magnussen", team: "Haas", role: "Secundário" }
]

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200)

    return teams
})

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200)

    return drivers
})


server.get<{ Params: DriverParams }>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find(driver => driver.id === id)

    if (!driver) {
        response.type("application/json").code(404)
        return { message: "Driver Not Found" }
    } else {
        response.type("application/json").code(200)
        return {
            driver
        }
    }
})

server.listen({
    port: 3333
}, () => {
    console.log("Server Iniciado na porta 3333")
})