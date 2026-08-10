//Indexes for queries

db.restaurants.createIndex({ cuisine: 1 });

db.restaurants.createIndex({ borough: 1 })

db.restaurants.createIndex({ grades.score: 1 });

db.restaurants.createIndex({ location.coordinates: 1 });
