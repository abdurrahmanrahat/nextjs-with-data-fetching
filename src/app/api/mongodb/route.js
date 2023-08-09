import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  // Replace the uri string with your connection string.
  const uri =
    "mongodb+srv://random-db-user:own47pass74random@cluster0.mjja2r0.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    const database = client.db("easy-shop");
    const categories = database.collection("categories");

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const result = await categories.find(query).toArray();

    console.log(result);
    return NextResponse.json(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
