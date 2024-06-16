const { Router } = require('express');
const Detection = require('./components/detection/detection-route');

module.exports = () => {
    const app = Router();

    Detection(app);
    return app;
};
