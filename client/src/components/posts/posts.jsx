import React, { Component } from "react";

import journeyService, { getJourneylogs } from "../../services/journeys";
//need css

class Posts extends Component {
  // getPost: function(callback){
  //     MongoClient.connect(url, function(err, db){
  //          db.collection('post', function (err, collection) {
  //             collection.find().toArray(function (err, list) {
  //                 callback(list);
  //             });
  //          });
  //     })
  // }

  //     var self = this;

  //     axios.post('/getJourneylogs', {

  //     })
  //     .then(function (response) {

  //     })
  //     .catch(function (error) {
  //       console.log('error is ',error);
  //     });

  render() {
    return <div>This is the blog section</div>;
  }
}

export default Posts;
