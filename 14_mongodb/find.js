'use strict';

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
	'mongodb://127.0.0.1:27017/foosquad',
	function(err, connection) {
		var collection = connection.collection('bar');
		
		for (var i = -100; i < 100; i++) {
			collection.insert({'val': i}, function(err, count) { });
		}

		// 3 ways to find()

		// convert search results to array
		// load all documents onto memory at once
		collection.find({ }).toArray(function(err, documents) {
			console.dir(documents);
			console.log();
		});
		
		// probe search results using cursor obj returned by find()
		// get documents one by one
		collection.find({ }).each(function(err, document) {
			if (document === null) {	// null after last document
				console.log();
			} else {
				console.dir(document);
			}
		});

		// using a stream
		var stream = collection.find({ }).stream();

		stream.on('data', function(document) {	// each time a new document is received
			console.dir(document);
		});

		stream.on('close', function(document) {	// after the last document
			console.log();

			collection.remove({ }, function() {
				connection.close();
			});
		});
	}
);
