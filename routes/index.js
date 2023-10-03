const router = require('express').Router();
const passport = require('passport');

router
    .use('/', require('./swagger'))    
    .get('/login', passport.authenticate('github'), (req, res) => {})
    .get('/logout', function(req, res, next) {
        //#swagger.tags=['Index']
        req.logout(function(err) {
            if (err) { return next(err); }
            res.redirect('/');
        });
    })
    .use('/inventory', require('./inventory'))
    .use('/supplier', require('./supplier'));

module.exports = router;

