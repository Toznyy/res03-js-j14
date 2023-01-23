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
        let jsonUser = JSON.stringify(users);
        sessionStorage.setItem("users", jsonUser);
    }
    
    load() {
        let usersStorage = JSON.parse(sessionStorage.getItem("users"));
        let newUsers = [];
        
        for (let i = 0; i < usersStorage.length; i++) {
            let parseUser = JSON.parse(booksStorage[i]);
            let newUser = new User(parseUser.id, parseUser.username, parseUser.email, parseUser.password, parseUser.firstName, parseUser.lastName, parseUser.profileImage);
            newUsers.push(newUser);
        }
    }
}

export { UserManager };