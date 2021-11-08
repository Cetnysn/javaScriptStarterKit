<<<<<<< HEAD
//export dışardan import etmek için kullanılıyor

export default class UserService {

    constructor(logerService) {
        this.users = []
        this.logerService = logerService
    }

    add(user) {
        this.users.push(user)
        this.logerService.log(user)
    }

    list() {
        return this.users
    }

    getById(id) {
        return this.users.find(u => u.id === id)
    }
=======
export default class UserService{
    constructor(loggerService){
        this.users = []
        this.loggerService =loggerService
    }

    add(user){
        this.users.push(user)
        this.loggerService.log(user)
    }

    list(){
        return this.users
    }

    getById(id){
        return this.users.find(u=>u.id ===id)
    }

>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
}