import mongoose from "mongoose";
const artistaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Type.objectId},
    name: {type: String, required: true}
})

const artista = mongoose.model('artista', artistaSchema)

export default artista