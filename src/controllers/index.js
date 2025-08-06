const errorHandler = require("./../middlewares/errorHandler")
class Controller {

    constructor(model) {
        this.model = model;
    }

    create() {
        return errorHandler(async (req, res) => {
            const data = req.body
            await this.model.create(data)
            res.status(201).json({
                message: "User created successfully",
                data: data
            })
        })
    }

    getAll() {
        return errorHandler(async (req, res) => {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const offset = (page - 1) * limit;

            const { count, rows: users } = await this.model.findAndCountAll({
                limit,
                offset,
                order: [['id', 'ASC']]
            })

            const totalPages = Math.ceil(count / limit);
            const hasMore = page < totalPages;

            res.status(200).json({
                message: "Users retrieved successfully",
                pagination: {
                    totalItems: count,
                    totalPages: totalPages,
                    currentPage: page,
                    hasMore: hasMore
                },
                data: users,
            })
        })



    }

    getById() {
        return errorHandler(async (req, res) => {
            const id = req.params.id;
            const user = await this.model.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json({
                message: "User retrieved successfully",
                data: user
            });
        });
    }

    update(){
        return errorHandler(async (req, res) => {
            const update = await this.model.findByPk(req.params.id);
            if (!update) {
                return res.status(404).json({ message: "User not found" });
            }
            const data = req.body;
            await update.update(data);
            res.status(200).json({
                message: "User updated successfully",
                data: update
            }); 
        })
    }

    delete() {
        return errorHandler(async (req, res) => {
            const id = req.params.id;
            const user = await this.model.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            await user.destroy();
            res.status(200).json({
                message: "User deleted successfully",   
                data: user
            });
        });
    }

}

module.exports = Controller;