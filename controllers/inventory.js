const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Inventory']
    const result = await mongodb.getDatabase().db().collection('inventory').find();
    result.toArray().then((items) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(items);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Users']
    const itemId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('inventory').find({ _id: itemId });
    result.toArray().then((items) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(items[0]);
    });
};

const createItem = async (req, res) => {
    //#swagger.tags=['Inventory']
    const item = {
        sku: req.body.sku,
        name: req.body.name,
        description: req.body.description,
        unit: req.body.unit,
        unit_weight: req.body.unit_weight,
        unit_cost: req.body.unit_cost,
        stock: req.body.stock
    };
    const response = await mongodb.getDatabase().db().collection('inventory').insertOne(item);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while creating the item.');
    }
};

const updateItem = async (req, res) => {
    //#swagger.tags=['Inventory']
    const itemId = new ObjectId(req.params.id);
    const item = {
        sku: req.body.sku,
        name: req.body.name,
        description: req.body.description,
        unit: req.body.unit,
        unit_weight: req.body.unit_weight,
        unit_cost: req.body.unit_cost,
        stock: req.body.stock,
    };
    const response = await mongodb.getDatabase().db().collection('inventory').replaceOne({ _id: itemId }, item);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while updating the item.');
    }
};

const deleteItem = async (req, res) => {
    //#swagger.tags=['Items']
    const itemId = new ObjectId(req.param.id);
    const response = await mongodb.getDatabase().db().collection('inventory').deleteOne({ _id: itemId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while deleting the item.')
    }
}


module.exports = {
    getAll,
    getSingle,
    createItem,
    updateItem,
    deleteItem
}