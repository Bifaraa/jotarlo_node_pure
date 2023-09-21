/*
*Import packages
*/

import express from 'express'
import 'dotenv/config'
import connectionDB from './data/mongodb'

/**
 * Create app instance and set port
 */
const app = express()

const PORT = process.env.PORT as string
/**
 * for parsing application/json
 */
app.use(express.json())

/**
 * Initialize database connection
 */
connectionDB()
  .then(() => { console.log('Database connected') })
  .catch((error) => { console.log(error) })

/**
 * configure port
 */
app.listen(PORT, () => {
  if (PORT === undefined) {
    console.log('PORT is undefined')
  } else {
    console.log(`Server running on port ${PORT}`)
  }
})
