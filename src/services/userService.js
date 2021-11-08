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
}