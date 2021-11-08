import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

<<<<<<< HEAD
console.log("user component loaded!")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Abdullah", "ÇETİN", "Sakarya")
let user2 = new User(2, "Yasin", "ÇETİN", "Sakarya")
=======
console.log("User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Engin","Demiroğ","Ankara")
let user2 = new User(2,"Baran","Gökçekli","Muğla")
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))
<<<<<<< HEAD
userService.list()
userService.getById(1)


let customer = { id: 1, firstName: "Abdullah" }

//prototyping
customer.lastName = "ÇETİN"
=======




let customer = {id:1, firstName:"Engin"}

//prototyping
customer.lastName = "Demiroğ"
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25

console.log(customer.lastName)