let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');
let url = 'mongodb://localhost:3000/Journeylog';
 
module.exports = {
    addPost: function(title, subject, callback){
        MongoClient.connect(url, function(err, db) {
            db.collection('post').insertOne( {
                "title": title,
                "subject": subject
            },function(err, result){
                assert.equal(err, null);
                console.log("Saved the blog post details.");
                if(err == null){
                    callback(true)
                }
                else{
                    callback(false)
                }
            });
        });
    }
}

//need to create a request handler in app.js
//app.post('/addpost', function (req, res) {
//    var title = req.body.title;
//    var subject = req.body.subject;
//    post.addPost(title, subject ,function(result){
//      res.send(result);
//    });
//  })