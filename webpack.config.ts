import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildPaths } from './config/build/types/config'

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src')
}

const mode = 'development'
const isDev = mode === 'development'

const PORT = 3000

const config = buildWebpackConfig({
  mode,
  paths,
  isDev,
  port: PORT
})

export default config