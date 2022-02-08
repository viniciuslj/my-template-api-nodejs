import { Express, Request, Response, Router } from "express"
import { StatusCodes } from 'http-status-codes'
import { autoInjectable, singleton } from "tsyringe"

@autoInjectable()
@singleton()
export class HelloWorldController {    
    
    constructor() {}

    registerRoutes(app: Express) {
        const router = Router()
            .get('/', (req: Request, res: Response) => this.find(req, res))

        app.use('/hello-worlds', router)
    }

    private async find(req: Request, res: Response) {
        try {
            res.status(StatusCodes.OK).send({message: "Hello World!"})
        } catch (e) {
            console.log(e)
        }
    }
}
