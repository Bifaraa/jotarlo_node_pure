import { Login } from '../interfaces/login.interface'
import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const LoginSchema: Schema = new Schema({
  codigo2FA: { type: String, required: true },
  estadoCodigo: { type: Boolean, required: true },
  token: { type: String, required: true },
  estadoToken: { type: Boolean, required: true }
})

LoginSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' })
const LoginModel = mongoose.model<Login>('Login', LoginSchema)
export default LoginModel
