import { Document } from 'mongoose'

export interface Usuario extends Document {
  id: string
  primer_nombre: string
  segundo_nombre: string
  primer_apellido: string
  segundo_apellido: string
  correo: string
  celular: string
  clave: string
}
