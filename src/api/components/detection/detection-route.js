const { Router } = require('express');

const route = Router();

module.exports = (app) => {
    app.use('/detections', route);

    route.get('/', (req, res) => {
        res.send('Ini API utama Detection')
    });
};
