import express from "express"
import cors from "cors"
import { StreamChat } from "stream-chat"

const app = express();

app.use(cors());
app.use(express.json());

const api_key = "h4uz5vfhb4u6"
const api_secret = "gy9cefnnsq7fdmvhh3nwypg6sd2v3myxxuh2yate6aqfyuwuh8ad9c6s57fks6cn";
const serverClient = new StreamChat(api_key, api_secret);

// create .env file and make these two values environment variables

app.listen(3001, () => {
    console.log("hello there adventurer");
})

