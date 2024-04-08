import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router.get('', this.getBurgers)
    }
    async getBurgers(request, response, next) {
        try {
            const burgers = await burgersService.getBurgers()
            response.send(burgers)
        } catch (error) {
            next(error)
            console.error(error);
        }
    }
}