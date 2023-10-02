const router = require('express').Router();
const passport = require('passport');

router
    .use('/', require('./swagger'))
    // .get('/', (req, res) => {
    //     //#swagger.tags=['Index']
    //     res.send(req.session.user !== undefined ? `Logged in as ${req.session.user.displayName}` : "Logged Out")
    // })
    .get('/login', passport.authenticate('github'), (req, res) => {})
    .get('/logout', function(req, res, next) {
        req.logout(function(err) {
            if (err) { return next(err); }
            res.redirect('/');
        });
    })
    .use('/inventory', require('./inventory'))
    .use('/supplier', require('./supplier'));

module.exports = router;

