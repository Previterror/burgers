import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router.get('', this.getBurgers)
        this.router.post('', this.addBurgers)
        this.router.delete('/:burgerId', this.trashBurger)
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


    async addBurgers(request, response, next) {
        try {
            const burgerData = request.body
            const burger = await burgersService.createBurger(burgerData)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async trashBurger(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            await burgersService.trashBurger(burgerId)
            response.send("Burger was trashed")
        } catch (error) {
            next(error)
        }
    }





}