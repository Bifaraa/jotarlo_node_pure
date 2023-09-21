import { Document } from 'mongodb'

export interface RolMenu extends Document {
  guardar: boolean
  editar: boolean
  listar: boolean
  eliminar: boolean
  descargar: boolean
}
