import express from "express"

class Server{
    constructor(){
        this.app = express();
        this.middlewares()
        this.routing()
        this.port = process.env.PORT || 3000;
        

    }

    routing(){
        this.app.get('/api', function (req, res) {
            res.send('Hello World')
          })
    }

    middlewares(){
        this.app.use(express.static("public"));
    }

    listen(){
        this.app.listen(this.port);
    }

}

export default Server