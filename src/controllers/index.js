class Controller {

    constructor(model) {
        this.model = model;
    }

    create(req, res) {
        const data = req.body;
        this.model.create(data, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Error creating record' });
            }
            res.status(201).json({ message: 'Record created successfully', id: result.insertId });
        });
    }
}

module.exports = Controller;