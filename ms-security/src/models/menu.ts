import { Menu } from '../interfaces/menu.interface'
import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const MenuSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  comentarios: { type: String, required: false }
})

MenuSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' })
const MenuModel = mongoose.model<Menu>('Menu', MenuSchema)

export default MenuModel
