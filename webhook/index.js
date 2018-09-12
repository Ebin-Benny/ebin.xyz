var express = require("express");
var app = express();
var childProcess = require('child_process');
var username = "Ebin-Benny"

app.listen(8080, () => console.log('Listening on Port 8080'));

app.post("/webhook/github", function(req,res) {
	var sender = req.body.sender;
	
	if(sender.login === username) {
		deploy(res);
	}
});

function deploy(res) {
	childProcess.exec('cd .. && ./deploy.sh', function(err, stdout, stderr) {
		if(err) {
			console.error(err);
			return res.send(500);
		}
		res.send(200);
	});
}
