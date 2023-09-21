import { Document } from 'mongodb'

export interface Login extends Document {
  codigo2FA: string
  estadoCodigo: boolean
  token: string
  estadoToken: boolean
}
