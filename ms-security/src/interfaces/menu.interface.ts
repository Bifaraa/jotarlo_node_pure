import { Document } from 'mongoose'

export interface Menu extends Document {
  nombre: string
  comentarios: string
}
