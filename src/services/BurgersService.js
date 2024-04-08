import { dbContext } from "../db/DbContext.js"


class BurgersService {
    async trashBurger(burgerId) {
        const burgerToTrash = await dbContext.Burgers.findById(burgerId)
        if (!burgerToTrash) throw new Error(`Sorry that burger has already been trashed ${burgerId}`)
        await dbContext.Burgers.deleteOne({ _id: burgerId })
    }

    async createBurger(burgerData) {
        const burger = await dbContext.Burgers.create(burgerData)
        return burger
    }

    async getBurgers() {
        const burgers = await dbContext.Burgers.find()
        return burgers
    }

}


export const burgersService = new BurgersService()