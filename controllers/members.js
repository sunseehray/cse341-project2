const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Members']
    const result = await mongodb.getDatabase().db().collection('members').find();
    result.toArray().then((members) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(members);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Members']
    const memberId = new ObjectId(req.param.id);
    const result = await mongodb.getDatabase().db().collection('members').find({ _id: memberId });
    result.toArray().then((members) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(members[0]);
    });
};

const createMember = async (req, res) => {
    //#swagger.tags=['Members']
    const member = {
        username: req.body.username,
        email: req.body.email,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('members').insertOne(member);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while creating the member.');
    }
};

const updateMember = async (req, res) => {
    //#swagger.tags=['Members']
    const memberId = new ObjectId(req.param.id);
    const member = {
        username: req.body.username,
        email: req.body.email,
        birthday: req.body.birthday,
    };
    const response = await mongodb.getDatabase().db().collection('members').replaceOne({ _id: memberId }, member);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while updating the member.');
    }
};

const deleteMember = async (req, res) => {
    //#swagger.tags=['Members']
    const memberId = new ObjectId(req.param.id);
    const response = await mongodb.getDatabase().db().collection('members').deleteOne({ _id: memberId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while deleting the member.')
    }
}


module.exports = {
    getAll,
    getSingle,
    createMember,
    updateMember,
    deleteMember
}