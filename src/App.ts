import express from "express"
import { Express } from "express"
import { autoInjectable, singleton } from "tsyringe"

import { HelloWorldController } from './controller/HelloWorldController';

@autoInjectable()
@singleton()
export class App {
    app: Express

    constructor(
        private helloWorldController: HelloWorldController
    ) {
        this.app = express()

        this.registerMiddlewares()
        this.registerRoutes()

        const apiPort = Number(process.env.API_PORT || "3000")

        this.app.listen(apiPort, () => {
            const date = new Date()
            console.log(`-------------------------------`)
            console.log(`    API ativa na porta ${apiPort}    \\`)
            console.log(`    ${date.toLocaleDateString()} as ${date.toLocaleTimeString()}     /`)
            console.log(`-------------------------------`)
        })
    }

    private registerMiddlewares() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    private registerRoutes() {
        this.helloWorldController.registerRoutes(this.app)
    }
}