import { Rol } from '../interfaces/rol.interface'
import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const RolSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  comentarios: { type: String, required: false }
})

RolSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' })
const RolModel = mongoose.model<Rol>('Rol', RolSchema)

export default RolModel
