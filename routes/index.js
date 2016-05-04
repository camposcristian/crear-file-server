var express = require('express');
var router = express.Router();
var azure = require('azure-storage');
var azure = require('azure-storage');
var nconf = require('nconf');
var myStreamLength = getSomeStreamLength();
nconf.env()
     .file({ file: 'config.json', search: true });
var accountName = nconf.get("STORAGE_NAME");
var accountKey = nconf.get("STORAGE_KEY");



var blobSvc = azure.createBlobService(accountName, accountKey);


router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});
router.post('/', function (req, res) {
 var object= Object.keys(req.body)
  blobSvc.createBlockBlobFromStream('logs', 'object', 'myStreamLength', function (error, result, response) {
    if (!error) {
    }
  });
});

module.exports = router;
