import { Usuario } from '../interfaces/usuario.interface'
import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const UsuarioSchema: Schema = new Schema({
  primer_nombre: { type: String, required: true },
  segundo_nombre: { type: String, required: false },
  primer_apellido: { type: String, required: true },
  segundo_apellido: { type: String, required: false },
  correo: { type: String, required: true },
  celular: { type: String, required: true },
  clave: { type: String, required: true }
})

UsuarioSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' })
const UsuarioModel = mongoose.model<Usuario>('Usuario', UsuarioSchema)

export default UsuarioModel
