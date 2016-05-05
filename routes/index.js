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
    var blobService = azure.createBlobService();
    var form = new multiparty.Form();
    form.on('part', function(part) {
        res.send({ Grrr: part });
        if (part.filename) {
            var size = part.byteCount - part.byteOffset;
            var name = part.filename;
            blobService.createBlockBlobFromStream('logs', name, part, size, function(error) {
                if (error) {
                    res.send({ Grrr: error });
                }
            });
        } else {
            form.handlePart(part);
        }
    });
    form.parse(req);
    res.send('OK');
});



module.exports = router;
