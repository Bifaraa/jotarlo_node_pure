/*
* Import packages
*/
import 'dotenv/config'
import { connect } from 'mongoose'

async function connectionDB (): Promise<void> {
  const uri = process.env.MONGO_DB as string
  await connect(uri)
}

export default connectionDB
