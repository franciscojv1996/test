const errorHandler = require("./../middlewares/errorHandler")
class Controller {

    constructor(model) {
        this.model = model;
    }

     create(){
        return errorHandler(async (req, res) =>{
            const data = req.body
            await this.model.create(data)
            res.status(201).json({
                message: "User created successfully",
                data: data
            })

        
        })
    }

}

module.exports = Controller;