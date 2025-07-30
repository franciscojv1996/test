const errorHandler = require("./../middlewares/errorHandler")
class Controller {

    constructor(model) {
        this.model = model;
    }

     create(){
        return errorHandler(async (req, res) =>{
            console.log("hola", this.model)

            return res.status(200).json({
                message:'hola'
            })
        })
    }

}

module.exports = Controller;