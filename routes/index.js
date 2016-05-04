var express = require('express');
var router = express.Router();
var azure = require('azure-storage');
var blobSvc = azure.createBlobService();


router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});
router.post('/', function (req, res) {
  blobSvc.createBlockBlobFromStream('logs', 'res', 'logs.log', function (error, result, response) {
    if (!error) {
    }
  });
});

module.exports = router;
