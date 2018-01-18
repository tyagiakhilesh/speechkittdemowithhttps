var express = require('express');
var fs = require('fs');

var key = fs.readFileSync('encryption/private.key');
var cert = fs.readFileSync( 'encryption/primary.cert' );
//var ca = fs.readFileSync( 'encryption/intermediate.crt' );

var options = {
	key: key,
	cert: cert//,
	//ca: ca
};

var app = express();
app.use(express.static('.'));

var https = require('https');
https.createServer(options, app).listen(8443);
