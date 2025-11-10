const express = require('express');
const taskListController = require('../controllers/taskListController');


const router = express.Router();

router.get('/', (req, res) => res.render('index'))

router.get('/app', taskListController.index);

router.get('/app/nova-lista', taskListController.create);

router.post('/app/nova-lista', taskListController.save);

module.exports = router;

