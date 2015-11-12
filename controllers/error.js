
// controllers/error.js
var express = require('express');
var router = express.Router();

var decorateErrors = require('../viewmodels/error');

// Hibalista oldal
router.get('/list', function (req, res) {
    req.app.models.error.find().then(function (errors) {
        res.render('errors/list', {
            errors: decorateErrors(errors),
            messages: req.flash('info')
        });
    });
});

// Hiba felvitele
router.get('/new', function(req, res) {
    var validationErrors = (req.flash('validationErrors') || [{}]).pop();
    var data = (req.flash('data') || [{}]).pop();
    
    res.render('errors/new', {
        validationErrors: validationErrors,
        data: data,
    });
})

// Hiba felvitele POST
router.post('/new', function(req, res) {
   // adatok ellenőrzése
    req.checkBody('helyszin', 'Hibás helyszín').notEmpty().withMessage('Kötelező megadni!');
    req.sanitizeBody('leiras').escape();
    req.checkBody('leiras', 'Hibás leírás').notEmpty().withMessage('Kötelező megadni!');
     req.checkBody('hatarido', 'Hibás dátum').notEmpty().withMessage('Kötelező megadni!');
    
    var validationErrors = req.validationErrors(true);
    console.log(validationErrors);
    
    if (validationErrors) {
        // űrlap megjelenítése a hibákkal és a felküldött adatokkal
        req.flash('validationErrors', validationErrors);
        req.flash('data', req.body);
        res.redirect('/errors/new');
    }
    else {
        req.app.models.error.create({
            status: 'new',
            deadline: req.body.hatarido,
            location: req.body.helyszin,
            description: req.body.leiras
        })
        .then(function (error) {
            //siker
            req.flash('info', 'Hiba sikeresen felvéve!');
            res.redirect('/errors/list');
        })
        .catch(function (err) {
            //hiba
            console.log(err)
        });
    }
});

router.get('/delete/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);
    req.app.models.error.destroy({ id: id})
    .then(function (error){
        req.flash('info', 'Sikeres törlés!');
        res.redirect('/errors/list');
        
    })
    .catch(function (err) {
        console.log(err);
    });
});

router.get('/:id', function(req, res) {
    var id = req.params.id;

    req.app.models.error.findOne({ id: id}).then(function (error) {
        res.render('errors/show', {
            error: error,
        }); 
    });
    
});

router.post('/:id', function(req, res) {
    var id = req.params.id;
    var location = req.body.helyszin;
    var description = req.body.leiras;
    var deadline = req.body.hatarido;
    if(location != null){
        req.app.models.error.update({id: id},{location: location})
        .then(function (error){
            //
        })
        .catch(function (err){
            console.log(err);
        })
    }
    if(description != null){
        req.app.models.error.update({id: id},{description: description})
        .then(function (error){
            //
        })
        .catch(function (err){
            console.log(err);
        })
    }
    if(deadline != null){
        req.app.models.error.update({id: id},{deadline: deadline})
        .then(function (error){
            //
        })
        .catch(function (err){
            console.log(err);
        })
    }
    req.flash('info', 'Sikeres módosítás!');
    res.redirect('/errors/list');
});

module.exports = router;

