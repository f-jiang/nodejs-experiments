'use strict';

var MongoClient = require('mongodb').MongoClient;//

MongoClient.connect(
  'mongodb://127.0.0.1:27017/store',
  function(err, connection) {
	var collection = connection.collection('orders');//

	for (var i = 0; i < 10; i++) {
		collection.insert( 
			{
				'number': Math.round(Math.random() * 10), 
				'ready': Math.random() < 0.5,
				'cost': Math.round(Math.random() * 1000),
				'delivery': Math.random() < 0.5,
				'priority': 10
			}, 
			function(err, count) {}
		);
	}

	collection.update(
		{'delivery': true, 'ready': true},//
		{'$set': {'deliveryFee': 10}, '$inc': {'priority': -5}},//
		{'multi': true},
		function (err, count) {
			console.log('Added delivery fees to', count, 'items');
			console.log();
		}
	);

	collection.find(
		{'ready': false}, 
		{'sort': [//
			['delivery', 'desc'],
			['number', 'asc']
		]}
	).toArray(function (err, documents) {
		console.log('Orders not ready:');
		console.dir(documents);
		console.log();	
	});

	collection.find(
		{'ready': true}, 
		{'sort': [
			['delivery', 'desc'],
			['cost', 'desc']
		]}
	).toArray(function (err, documents) {
		console.log('Orders ready:');
		console.dir(documents);
		console.log();
	});

	collection.find({}, {'sort': 'cost'}).toArray(function(err, documents) {
		console.log('All orders:');
		console.dir(documents);

		collection.remove({}, function() {//
			connection.close();//
		});
	});
  }
);
