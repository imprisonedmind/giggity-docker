// this should only run if the db does not already exist
db = db.getSiblingDB('gigs');

// Create events collection
if (!db.events.find().count()) {
  db.createCollection('events');
}

// Create any indexes you need
db.events.createIndex({"date": 1});  // Example index on date field

// Optional: Insert a sample event if the collection is empty
db.events.insertOne({
  title: "Sample Event",
  date: new Date(),
  createdAt: new Date()
});
