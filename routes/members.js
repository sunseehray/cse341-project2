const express = require('express');
const router = express.Router();

const membersController = require('../controllers/members');

router
    .get('/', membersController.getAll)
    .get('/:id', membersController.getSingle)
    .post('/', membersController.createMember)
    .put('/:id', membersController.updateMember)
    .delete('/:id', membersController.deleteMember);

module.exports = router;