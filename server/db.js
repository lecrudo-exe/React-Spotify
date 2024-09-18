import mongoose from "mongoose";

export default async function conectDB(){
    mongoose.connect("mongodb+srv://pegomessouza:Pedro2017@spotify.dero4.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Spotify")


    return mongoose.connection
}