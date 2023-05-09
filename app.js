import Server from "./models/server.js"

function app(params) {
    const server = new Server();

    server.listen()

}

app()