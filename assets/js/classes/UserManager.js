class UserManager {

    #users;

    constructor(users) {

        this.#users = users;
        
    }

    get() {

        return this.#users;
    }

    set users(users) {

        this.#users = users;

    }
    
    findAllUsers() {
        
    }
    
    findUserById(id) {
        
    }
    
    findUserByUsername(username) {
        
    }
    
    findUserByEmail(email) {
        
    }
    
    createUser(user) {
        
    }
    
    deleteUser(userId) {
        
    }
    
    editUser(user) {
        
    }
    
    save() {
        
    }
    
    load() {
        
    }
}

export { UserManager };