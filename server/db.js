import mongoose from "mongoose";

export default async function conectDB(){
    mongoose.connect("mongodb+srv://pegomessouza:pedro1303072dejulho(*)@spotify.dero4.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Spotify")


    return mongoose.connection
}