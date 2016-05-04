var azure = require('azure-storage');
//var async = require('async');
var express = require('express');
var router = express();
var fs = require('fs');
router.post('/', function (req, res) {
res.render(__dirname + '/../views/error')
});

	
module.exports = router;