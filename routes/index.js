var express = require('express');
var router = express.Router();
var azure = require('azure-storage');
var azure = require('azure-storage');
var nconf = require('nconf');
nconf.env()
     .file({ file: 'config.json', search: true });
var accountName = nconf.get("STORAGE_NAME");
var accountKey = nconf.get("STORAGE_KEY");



var blobSvc = azure.createBlobService(accountName, accountKey);


router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', function (req, res) {
    var myStream = getSomeStream();
    var myStreamLength = getSomeStreamLength();
            blobSvc.createBlockBlobFromStream('logs', myStream,myStreamLength, function(error) {
                if (error) {
                    res.send({ Grrr: error });
                }
    });
    form.parse(req);
    res.send('OK');
});



module.exports = router;
