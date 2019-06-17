const mongoose = use('mongoose');

module.exports = {
    TestSchema: new mongoose.Schema({
            name: String
        }, {
            timestamps: true
        }
    ),
    turf: new mongoose.Schema({
        name: String
    }) 
};