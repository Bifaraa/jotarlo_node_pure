import { RolMenu } from '../interfaces/rolMenu.interface'
import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const RolMenuSchema: Schema = new Schema({
  guardar: { type: Boolean, required: true },
  editar: { type: Boolean, required: true },
  listar: { type: Boolean, required: true },
  eliminar: { type: Boolean, required: true },
  descargar: { type: Boolean, required: true }
})

RolMenuSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' })
const RolMenuModel = mongoose.model<RolMenu>('RolMenu', RolMenuSchema)

export default RolMenuModel
