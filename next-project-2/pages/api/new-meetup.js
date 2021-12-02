// /api/new-meetup
import { MongoClient } from 'mongodb'

async function handler(req, res) {
    if (req.method == "POST") {
        const data = req.body;

        const { title, image, address, description } = data;

        const client = await MongoClient.connect("mongodb+srv://webRubik:test'OR'a'='a'@web-db.qjovo.mongodb.net/meetups?retryWrites=true&w=majority");
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data); // It take Object to store data.
        //Result will an object
        console.log(result);
        client.close();

        res.status(201).json({ message: "Meetup inserted" });
    }
}

export default handler;