//Indexes for queries

db.restaurants.createIndex({ name: 1 });

db.restaurants.createIndex({ cuisine: 1 });

db.restaurants.createIndex({ borough: 1 })

db.restaurants.createIndex({ 'location.type': 1 });

db.restaurants.createIndex({ 'location.coordinates': 1 });

db.restaurants.createIndex({ 'grades.date': 1 })

db.restaurants.createIndex({ 'grades.grade': 1 });

db.restaurants.createIndex({ 'grades.score': 1 });




