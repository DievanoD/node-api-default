const Object = require('../models/Object');

module.exports = {
    async test(req, res) {
        try {
            const obj = new Object('test name', 'test description');
            res.send(obj);
        } catch (err) {
            console.error(err);
        }
    },
};