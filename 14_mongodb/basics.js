// documents are saved after the code has finished executing, so running a second time will give us a total of two documents
'use strict';

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
	'mongodb://127.0.0.1:27017/accounting',	// 'accounting' is our database
	function(err, connection) {
		var collection = connection.collection('customers');

		// only updates the age on the first matching documents
		// collection.update({ }, { '$set': { 'age': 24 } }, function(err,count) {

		// updates age for ALL documents
		collection.update(
			{ },
			{ '$set': { 'age': 24 } },
			{ 'multi': true },
			function(err, count) {
				console.log('Updated', count, 'documents');

				// get all documents (entries)
				collection.find().toArray(function(err,documents) {
					console.dir(documents);	// print array of docs to screen
					connection.close();
				});
			}
		);
	}
);
