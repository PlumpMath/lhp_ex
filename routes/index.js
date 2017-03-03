var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Contact = require('../models/Contacts');

//router.post, router.get, router.put, router.param etc
router.post('/contacts', function (req, res, next) {
	var contact = new Contact (req.body)

	contact.save(function (error, list) {
		if (error) {return next(error);}

		res.json(list);
	});
});

router.get('/contactlist', function (req, res, next) {
	Contact.find(function (err, contacts) {
		if (err) {return next(err);}

		res.send(contacts)
	});
});





module.exports = router;