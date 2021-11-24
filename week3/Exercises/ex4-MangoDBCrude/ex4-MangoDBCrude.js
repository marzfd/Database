import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4wwal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(url);

const dbName = "test";

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    // Use the collection 'city'
    const collection = db.collection("city");

    // 1. Create a new record (document) for a new city (your home town, say)
    const result = await collection.insertOne({CityName: "Kerman", CountryCode: "IR"});
    console.log(result);
    console.log('The new record added !');

    // 2. Update that record with a new population
    const result2 = await collection.updateOne({CityName: "Kerman"}, {$set: {Population: 550000}});
    console.log(result2);
    console.log('The record updated !');

    // 3. Read the document that you just updated in two ways : finding by the city name, and then by the country code
    const result3 = await collection.find({CityName: "Kerman"}).toArray();
    console.log(result3);
    console.log('The record found !');

    const result4 = await collection.find({CountryCode: "IR"}).toArray();
    console.log(result4);
    console.log('The record found !');

    // 4. Delete the city
    const result5 = await collection.deleteOne({CityName: "Kerman"});
    console.log(result5);
    console.log('The record deleted !');
  }
  catch (err) {
    console.log(err.stack);
  }
  finally {
    await client.close();
  }
}

run().catch(console.dir);