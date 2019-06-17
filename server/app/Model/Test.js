const mongoose = use('mongoose');
const { TestSchema } = use('Model/schemas');

// Model
const Test = mongoose.model('Test', TestSchema);

module.exports = Test