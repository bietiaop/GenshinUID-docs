import path from 'node:path'
import { fileURLToPath } from 'node:url'
import createFontSlice from 'font-slice'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

createFontSlice({
  // fontPath
  fontPath: path.resolve(__dirname, '../public/font/MiSans-Demibold.ttf'),
  // outputDir
  outputDir: path.resolve(__dirname, '../public/font/MiSans-Demibold'),
})
