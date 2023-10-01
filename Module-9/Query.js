//Create a Collection
db.createCollection("myCollection");

//Remove Collection
db.myCollection.drop();

//Insert Data One
db.myCollection.insertOne({
  name: "Srijon Ashraf",
  age: 23,
  city: "Dhaka",
});


//Delete/remove a single document from the collection

db.myCollection.deleteOne({ name: "Srijon Ashraf" })
