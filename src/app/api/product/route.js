import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// get method to get products from db
export async function GET(request) {
  const uri =
    "mongodb+srv://random-db-user:own47pass74random@cluster0.mjja2r0.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    const database = client.db("easy-shop");
    const stocksCollection = database.collection("stocks");

    const query = {};
    const result = await stocksCollection.find(query).toArray();
    return NextResponse.json(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

// post method to push product to db
export async function POST(request) {
  let body = await request.json();

  const uri =
    "mongodb+srv://random-db-user:own47pass74random@cluster0.mjja2r0.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    const database = client.db("easy-shop");
    const stocksCollection = database.collection("stocks");

    const result = await stocksCollection.insertOne(body);
    return NextResponse.json(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
