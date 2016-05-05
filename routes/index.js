var express = require('express');
var router = express.Router();
var azure = require('azure-storage');
var azure = require('azure-storage');
var nconf = require('nconf');
var multiparty = require('multiparty');
nconf.env()
    .file({ file: 'config.json', search: true });
var accountName = nconf.get("STORAGE_NAME");
var accountKey = nconf.get("STORAGE_KEY");



var blobSvc = azure.createBlobService(accountName, accountKey);


router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.post('/upload', function (req, res) {
    var form = new multiparty.Form();
    form.parse(req);
    console.log(form)
    form.on('part', function (part) {
        if (part.filename) {
            var filename = part.filename;
            var size = part.byteCount;

            var onError = function (error) {
                if (error) {
                    res.send({ grrr: error });
                }
            }
            blobSvc.createBlockBlobFromStream('logs', 'logs.log',part, size, function (error) {
                if (error) {
                    res.send({ Grrr: error });
                }
            });
        };
    })


    form.parse(req);
    res.send('OK');
});



module.exports = router;
