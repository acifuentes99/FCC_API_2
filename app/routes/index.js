//'use strict'

var path = process.cwd();
//var dbFunctions = require(path + '/app/controllers/dbFunctions.server.js');
//var Demos = require(path + '/app/models/demos.js');


module.exports = function (app) {

    app.route('/')
        .get(function(req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });

  /*  app.route('/api')
    .get(dbFunctions.getData(function (req, res){
        res.send("hola");
    })
    );
*/
  /*
    app.route('/api')
    .get(function(req, res){
       Demos.find(function(err, result){
            res.json(result);
       }); 
    });
*/
  var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
    app.route('/whoiam')
    .get(function(req, res) {
        var regex = /\(([^\)]+)\)/;
        var ip_ = req.headers['x-forwarded-for'] || 
             req.connection.remoteAddress || 
             req.socket.remoteAddress ||
             req.connection.socket.remoteAddress;
        var lang = req.headers['accept-language'].split(",");
        var soft = regex.exec(req.headers['user-agent']);
        var soft2 = soft[1].slice(0,soft[1].length);
        var out_ = {
            "ipaddress": ip_,
            "language": lang[0],
            "software": soft2 
        }
        res.send(out_);
    });
/*
app.get('/hello/:name', function(req, res) {
    res.send('hello ' + req.params.name + '!');
});*/
    /*
    app.route('/:id')
    .get(function(req, res){
        //Muestrate el parametro en pantalla
        res.send(id);
    });
    Done!!!
    seria algo asi:
    app.route('/id')
    .get(function(req,res){
        res.send(req.params.id)
    });
    * */

    };
