const CarService = require('../services/CarService');

module.exports = {
    getAll: async (req, res) => {
        let json = { error: '', result: [] };
        
        let cars = await CarService.getAll();

        for (let i in cars) {
            json.result.push({
                id: cars[i].id,
                description: cars[i].model
            });
        }

        res.json(json);
    },

    getCar: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        let car = await CarService.getCar(id);

        if (car) {
            json.result = car;
        }

        res.json(json);
    }
}