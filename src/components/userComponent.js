import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("user component loaded!")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Abdullah", "ÇETİN", "Sakarya")
let user2 = new User(2, "Yasin", "ÇETİN", "Sakarya")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))
userService.list()
userService.getById(1)


let customer = { id: 1, firstName: "Abdullah" }

//prototyping
customer.lastName = "ÇETİN"

console.log(customer.lastName)