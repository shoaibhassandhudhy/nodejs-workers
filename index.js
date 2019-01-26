const express = require('express')
const http = require("http");
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/users";
const moment = require('moment');
const assert = require('assert');
const async = require('async');

const app = express()
const port = 3000

var one_two = []
var two_three = []
var four_five = []

MongoClient.connect(url, function(err, db) {
    if (err) return console.log(err)

    var update_lastActivity_time_stamp = function(users){
        users.forEach(user => {
            diff = moment.duration(end.diff(moment(user['lastActivity'])));
            user_activity = diff.asMinutes();

            users.update({_id:user[_id]},
                {
                    lastActivity:user_activity
                },
                { upsert: true });
        });
    }

    var set_user = function(users){
        users.forEach(user => {
            var duration = user['lastActivity'] % 5
            if(duration > 0 && duration <= 2)
                one_two.push(user)
            else if(duration < 2 && duration < 4)
                two_three.push(user);
            else if((duration > 3 && duration < 5) || duration == 0)
                four_five.push(user);
        });
    }

    const users = db.db('users').collection('users');
    
    app.listen(port,() => {
        console.log("We are live on "+port);

        async.waterfall([
            function(callback){
                var db_users = users.find({}).limit(10);
                update_lastActivity_time_stamp(db_users);
                callback();
            },
            function(callback,users){
                setInterval(function() {
                    var db_users = users.find({});
                    set_users(db_users);
                }, 60 * 1000);
            }
        ], function (err, result) {
            console.log(done);
        });
        
    });
});