const router = require('express').Router();

router
    // .use('/', require('./swagger'))
    .get('/', (req, res) => {
        //#swagger.tags=['Sunseehray Tirazona']
        res.send('Sunseehray Tirazona');
    })
    .use('/members', require('./members'));

module.exports = router;

