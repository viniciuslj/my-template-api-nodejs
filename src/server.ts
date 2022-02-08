// Carregar variáveis de ambiente do arquivo .env
import dotenv from 'dotenv'

// Injeção de dependência
import "reflect-metadata"
import { container } from 'tsyringe'

import { App } from './App'

dotenv.config()

const app = container.resolve(App)
