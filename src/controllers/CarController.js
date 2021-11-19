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
    },

    insert: async (req, res) => {
        let json = { error: '', result: {} };

        let model = req.body.model;
        let plate = req.body.plate;


        if (model && plate) {
            let CarId = await CarService.insert(model, plate);
            json.result = {
                id: CarId,
                model,
                plate
            };
        } else {
            json.error = 'Fields not sent';
        }

        res.json(json);
    },

    alter: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        let model = req.body.model;
        let plate = req.body.plate;


        if (id && model && plate) {
            await CarService.alter(id, model, plate);
            json.result = {
                id,
                model,
                plate
            };
        } else {
            json.error = 'Fields not sent';
        }

        res.json(json);
    },

    remove: async (req, res) => {
        let json = { error: '', result: {} };

        await CarService.remove(req.params.id);

        res.json(json);
    }
}