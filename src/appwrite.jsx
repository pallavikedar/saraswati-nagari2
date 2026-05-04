import { Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // Your endpoint
  .setProject("68ece1d1000abe9952c0"); // Your project ID

const databases = new Databases(client);

export { client, databases };
