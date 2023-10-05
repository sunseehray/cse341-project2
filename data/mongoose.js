const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Inventory = mongoose.model('Inventory', {
    name: {
        type: String
    },
    description: {
        type: String
    },
    unit: {
        type: String
    },
    unit_weight: {
        type: Number
    },
    unit_cost: {
        type: Number
    },
    stock: {
        type: Number
    },
    sku: {
        type: String
    }
})

module.exports = {
    Inventory
};