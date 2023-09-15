/*
*Import packages
*/
import express from 'express'

/**
 * Create app instance and set port
 */
const app = express()

const PORT = process.env.PORT ?? 3000
/**
 * for parsing application/json
 */
app.use(express.json())

/**
 * configure port
 */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
