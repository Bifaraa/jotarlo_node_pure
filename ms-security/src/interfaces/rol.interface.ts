import { Document } from 'mongodb'

export interface Rol extends Document {
  nombre: string
  comentarios: string
}
